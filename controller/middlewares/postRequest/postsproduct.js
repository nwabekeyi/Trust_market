const multer = require('multer');
const fs = require('fs');
const { Dropbox } = require('dropbox');
const Product = require('../../model/dbSchema/product'); // Import the product model

// Initialize Dropbox client
const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

const postProduct = async (req, res) => {
    try {
        const { name, category, subCategory, price, stock, description, brand, model, specifications, keyFeatures, additionalInfo, relatedProducts } = req.body;
        const files = req.files;

        const pictureUrls = await Promise.all(files.map(async file => {
            const data = await fs.promises.readFile(file.path);
            const result = await dbx.filesUpload({ path: `/${file.originalname}`, contents: data });
            return result.result.path_lower;
        }));

        // Create a new product with uploaded image URLs
        const newProduct = new Product({
            name,
            category,
            subCategory,
            seller: {
                name: req.body.sellerName,
                contactInfo: {
                    email: req.body.sellerEmail,
                    phone: req.body.sellerPhone,
                    address: req.body.sellerAddress
                },
                rating: req.body.sellerRating,
                about: req.body.sellerAbout
            },
            price,
            stock,
            description,
            colorOptions: req.body.colorOptions.split(','),
            pictures: pictureUrls,
            brand,
            model,
            specifications: JSON.parse(specifications),
            keyFeatures: req.body.keyFeatures.split(','),
            additionalInfo: JSON.parse(additionalInfo),
            relatedProducts: req.body.relatedProducts.split(',')
        });

        await newProduct.save();

        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to upload images and create product' });
    }
};

module.exports = postProduct;