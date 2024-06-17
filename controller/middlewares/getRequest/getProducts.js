const Product = require('../../model/dbSchema/product');

// Middleware to get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Middleware to get a single product by ID
const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        console.log(req.params);

        const product = await Product.findById(productId);
        console.log('Product found:', product); // Log the product object

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllProducts,
    getProductById
};
