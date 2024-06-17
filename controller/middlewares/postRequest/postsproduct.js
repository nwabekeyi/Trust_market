const multer = require('multer');
const fs = require('fs').promises;
const { Dropbox } = require('dropbox');
const Product = require('../../model/dbSchema/product');
const { Seller } = require('../../model/dbSchema/User');
const { loadTokens, refreshAccessToken, saveTokens } = require('../../model/dbSchema/dBoxToken'); // Adjust the path to your token functions

// Configure multer to save files to 'uploads' directory (if needed)
const upload = multer({ dest: 'uploads/' });

const postProduct = async (req, res) => {
    try {
        let tokens = await loadTokens();

        // Check if the access token has expired
        if (new Date() >= tokens.expires_at) {
            const newAccessToken = await refreshAccessToken();
            tokens.access_token = newAccessToken;
            tokens.expires_at = new Date(Date.now() + 3600 * 1000); // Assuming the new access token expires in 1 hour
            await saveTokens(tokens.access_token, tokens.refresh_token, tokens.expires_at);
        }

        let dbx = new Dropbox({ accessToken: tokens.access_token });

        const {
            name, category, subCategory, price, stock, description,
            brand, model, specifications, keyFeatures, additionalInfo, colorOptions, sellerId, condition
        } = req.body;

        // Find the seller by ID
        const seller = await Seller.findById(sellerId);
        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }

        const files = req.files;

        // Array to store Dropbox direct links
        const pictureUrlsToStore = [];

        // Upload files to Dropbox and get the direct links
        for (const file of files) {
            const data = await fs.readFile(file.path);
            const result = await dbx.filesUpload({ path: `/${file.originalname}`, contents: data });

            // Create a shared link with direct URL (this is the key change)
            const createSharedLinkResult = await dbx.sharingCreateSharedLinkWithSettings({
                path: result.result.path_lower,
                settings: { requested_visibility: { '.tag': 'public' } } // Set visibility to public
            });

            // Use the direct URL of the shared link
            const directUrl = createSharedLinkResult.result.url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
            pictureUrlsToStore.push(directUrl);

            await fs.unlink(file.path); // Remove the file from local storage
        }

        // Parse fields that need to be arrays or objects
        const parsedAdditionalInfo = additionalInfo ? JSON.parse(additionalInfo) : {};
        const keyFeaturesArray = keyFeatures ? keyFeatures.split(',').map((feature) => feature.trim()) : [];
        const colorOptionsArray = colorOptions ? colorOptions.split(',').map((color) => color.trim()) : [];

        // Calculate average rating of all products
        const allProducts = await Product.find({});
        let totalRating = 0;
        allProducts.forEach(product => {
            totalRating += product.rating;
        });
        const averageRating = allProducts.length > 0 ? totalRating / allProducts.length : 0;

        // Calculate selling index
        const productRating = averageRating; // Use average rating for calculation
        const sellingIndex = (Math.pow(productRating, 2) * 2) / 100;

        // Create a new Product object
        const newProduct = new Product({
            name,
            category,
            subCategory,
            seller: sellerId, // Store seller ID
            price,
            stock,
            description,
            brand,
            model,
            specifications,
            keyFeatures: keyFeaturesArray,
            additionalInfo: parsedAdditionalInfo,
            colorOptions: colorOptionsArray,
            pictures: pictureUrlsToStore, // Store URLs of uploaded images
            condition,
            rating: productRating,
            sellingIndex
        });

        // Save the new product to the database
        await newProduct.save();

        // Respond with the newly created product
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Dropbox API Error:', error);
        if (error.response && error.response.status === 401) {
            // Handle token expiration by refreshing token and retrying the operation
            try {
                const newAccessToken = await refreshAccessToken();
                await saveTokens(newAccessToken, new Date(Date.now() + 3600 * 1000)); // Assuming the new access token expires in 1 hour
                dbx.setAccessToken(newAccessToken);

                // Retry the product upload process
                return postProduct(req, res);
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError);
                return res.status(500).json({ error: 'Error refreshing access token' });
            }
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = postProduct;
