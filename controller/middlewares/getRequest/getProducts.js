const Product = require('../../model/dbSchema/product');


// Middleware to get all products with pagination
const getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;  // Default to page 1 if not provided
        const limit = 20;  // 20 products per page

        // Calculate the number of products to skip
        const skip = (page - 1) * limit;

        // Find all products, sort by sellingIndex in descending order, and paginate
        const products = await Product.find()
            .sort({ sellingIndex: -1 })
            .skip(skip)
            .limit(limit);

        // Get the total number of products for pagination metadata
        const totalProducts = await Product.countDocuments();

        // Calculate total number of pages
        const totalPages = Math.ceil(totalProducts / limit);

        // Return the products along with pagination info
        res.status(200).json({
            page,
            totalPages,
            totalProducts,
            products
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = getAllProducts;



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
