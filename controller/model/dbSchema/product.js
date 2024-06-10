const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the review schema
const reviewSchema = new Schema({
  reviewer: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  comment: String,
  date: {
    type: Date,
    default: Date.now
  }
});

// Define the seller schema
const sellerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  contactInfo: {
    email: String,
    phone: String,
    address: String
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  about: {
    type: String,
    required: true
  }
});

// Define the specification schema
const specificationSchema = new Schema({
  key: {
    type: String,
    required: true
  },
  value: String
});

// Define the product schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: String,
  seller: {
    type: sellerSchema,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  colorOptions: [String],
  pictures: {
    type: [String],
    validate: [arrayLimit, '{PATH} exceeds the limit of 5']
  },
  brand: String,
  model: String,
  specifications: [specificationSchema],
  keyFeatures: [String],
  additionalInfo: {
    warranty: String,
    returnPolicy: String,
    assembly: String,
    shipping: String
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  relatedProducts: [String]
}, {
  timestamps: true
});

// Helper function to validate the number of pictures
function arrayLimit(val) {
  return val.length <= 5;
}

// Create the product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
