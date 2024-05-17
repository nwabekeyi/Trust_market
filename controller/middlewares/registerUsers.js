const User = require('../model/dbSchema/User');
const bcrypt = require('bcrypt');

// Helper function to handle registration logic
const registerUser = async (req, res, role) => {
    const { email, userName, password, confirmPassword, phone_number } = req.body;
    console.log(req.body);

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match.' });
    }

    try {
        // Check if the user already exists based on email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);


        // Create a new user
        const newUser = new User({
            email,
            userName,
            password: hashedPassword,
            phone_number,
            role,
            confirmPassword: hashedConfirmPassword
        });

        await newUser.save();
        return res.status(201).json({ message: `${role.charAt(0).toUpperCase() + role.slice(1)} registered successfully.`, user: newUser });
    } catch (error) {
        // Check for specific errors and provide appropriate error messages
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        } else {
            return res.status(500).json({ error: 'An error occurred while registering the user.' });
        }
    }
};


const registerSeller = (req, res) => registerUser(req, res, 'seller');
const registerBuyer = (req, res) => registerUser(req, res, 'buyer');
const registerAdmin = (req, res) => registerUser(req, res, 'admin');
const registerSuperadmin = (req, res) => registerUser(req, res, 'admin');


module.exports = { registerAdmin, registerBuyer, registerSeller, registerSuperadmin};

