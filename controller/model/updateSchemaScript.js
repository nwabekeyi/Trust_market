const mongoose = require('mongoose');
require('dotenv').config();
const { Buyer, Seller } = require('./dbSchema/User');


// MongoDB connection
const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://nwabekeyi:customized13@main.ltd8d4p.mongodb.net/mainDB?retryWrites=true&w=majority&appName=main");
        console.log('MongoDB connected successfully');

        // Call the function to update existing documents
        await updateExistingDocuments();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the MongoDB connection when done
        mongoose.connection.close();
    }
};

// Function to update existing documents
const updateExistingDocuments = async () => {
    try {
        await Buyer.updateMany({}, { $set: { city: 'Unknown', country: 'Unknown' } });
        await Seller.updateMany({}, { $set: { city: 'Unknown', country: 'Unknown' } });
        console.log('Documents updated successfully.');
    } catch (error) {
        console.error('Error updating documents:', error);
    }
};

// Connect to MongoDB and run the update function
connectToMongoDB();
