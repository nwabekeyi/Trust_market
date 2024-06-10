const Product = require('../../model/dbSchema/product');
const { Dropbox } = require('dropbox');

const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

const getAllProducts = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find();

        // Map over each product to add Dropbox URLs for images
        const productsWithUrls = await Promise.all(products.map(async (product) => {
            const productWithUrl = { ...product.toObject() }; // Create a copy of the product object
            // Fetch Dropbox URLs for each image and add them to the product object
            productWithUrl.pictures = await Promise.all(product.pictures.map(async (picture) => {
                try {
                    const result = await dbx.sharingCreateSharedLinkWithSettings({
                        path: picture,
                        settings: {
                            requested_visibility: 'public' // Set the link visibility to public
                        }
                    });
                    return result.url; // Store the permanent Dropbox URL for the image
                } catch (error) {
                    console.error('Error fetching Dropbox URL:', error);
                    return null; // Handle error by returning null for the URL
                }
            }));
            return productWithUrl;
        }));

        // Return the products with Dropbox URLs as JSON response
        res.status(200).json(productsWithUrls);
    } catch (error) {
        console.error(error);
        // Return error response if fetching products fails
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

const getOneProduct = async (req, res) => {
    try {
        // Extract the product ID from the URL parameter
        const productId = req.params.productId;

        // Fetch the product from the database using the product ID
        const product = await Product.findById(productId);

        // If the product is not found, return 404 Not Found
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Map over each image to add Dropbox URLs
        const productWithUrls = { ...product.toObject() }; // Create a copy of the product object
        productWithUrls.pictures = await Promise.all(product.pictures.map(async (picture) => {
            try {
                const result = await dbx.sharingCreateSharedLinkWithSettings({
                    path: picture,
                    settings: {
                        requested_visibility: 'public' // Set the link visibility to public
                    }
                });
                return result.url; // Store the permanent Dropbox URL for the image
            } catch (error) {
                console.error('Error fetching Dropbox URL:', error);
                return null; // Handle error by returning null for the URL
            }
        }));

        // Return the product with Dropbox URLs as JSON response
        res.status(200).json(productWithUrls);
    } catch (error) {
        console.error(error);
        // Return error response if fetching product fails
        res.status(500).json({ error: 'Failed to fetch product details' });
    }
}


module.exports = {getAllProducts, getOneProduct}