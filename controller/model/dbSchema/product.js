const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    colorOptions: [String],
    pictures: [String],
    brand: { type: String, required: true },
    model: { type: String, required: true },
    specifications: { type: String, required: true },
    keyFeatures: [String],
    additionalInfo: { type: Object },
    condition: { type: String, required: true },
    seller: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, default: 0 }, // Rating with a range of 0-5
    productReview: { type: String }, // Optional product review as a string
    totalSales: { type: Number, default: 0 }, // Total number of sales, default to 0
    sellingIndex: { type: Number, default: 0 } // New field for product selling index
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
