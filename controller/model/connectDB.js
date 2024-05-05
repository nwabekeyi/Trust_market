// dbConns.js
const mongoose = require('mongoose');
require('dotenv').config()

// MongoDB connection URI
const mongoURI = process.env.DATA_URI;

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Exit process if connection fails
    process.exit(1);
  }
};

module.exports = connectDB;
