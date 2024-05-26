const {Seller, Buyer, Admin} = require('../../model/dbSchema/User');
const bcrypt = require('bcrypt');

// buyer registration logic
const registerBuyer = async (req, res) => {
    const { email, userName, password, confirmPassword, phone_number } = req.body;
    console.log(req.body);

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match.' });
    }

    try {
        // Check if the user already exists based on email
        const existingBuyer = await Buyer.findOne({ email });
        if (existingBuyer) {
            return res.status(400).json({ error: 'Buyer already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new buyer
        const newBuyer = new Buyer({
            email,
            userName,
            password: hashedPassword,
            phone_number,
            role: 'buyer',
        });

        await newBuyer.save();
        return res.status(201).json({ message: `User registered successfully.`, user: newBuyer });
    } catch (error) {
        // Check for specific errors and provide appropriate error messages
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        } else {
            return res.status(500).json({ error: 'An error occurred while registering the user.' });
        }
    }
};

// seller registration logic
const registerSeller = async (req, res) => {
    const { email, userName, password, confirmPassword, phone_number } = req.body;
    console.log(req.body);

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match.' });
    }

    try {
        // Check if the user already exists based on email
        const existingSeller = await Seller.findOne({ email });
        if (existingSeller) {
            return res.status(400).json({ error: 'Seller already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new admin
        const newSeller = new Seller({
            email,
            userName,
            password: hashedPassword,
            phone_number,
            role: 'seller',
        });

        await newSeller.save();
        return res.status(201).json({ message: `user registered successfully.`, user: newSeller });
    } catch (error) {
        // Check for specific errors and provide appropriate error messages
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        } else {
            return res.status(500).json({ error: 'An error occurred while registering the user.' });
        }
    }
};

// admin registration logic
const registerAdmin = async (req, res) => {
    const { email, userName, password, confirmPassword, phone_number } = req.body;
    console.log(req.body);

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match.' });
    }

    try {
        // Check if the user already exists based on email
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ error: 'Admin already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new admin
        const newAdmin = new Admin({
            email,
            userName,
            password: hashedPassword,
            phone_number,
            role: 'admin',
        });

        await newAdmin.save();
        return res.status(201).json({ message: `user registered successfully.`, user: newAdmin });
    } catch (error) {
        // Check for specific errors and provide appropriate error messages
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        } else {
            return res.status(500).json({ error: 'An error occurred while registering the user.' });
        }
    }
};

// super admin registration logic
const registerSuperadmin = async (req, res) => {
    const { email, userName, password, confirmPassword, phone_number } = req.body;
    console.log(req.body);

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match.' });
    }

    try {
        // Check if the user already exists based on email
        const existingSuperadmin = await Admin.findOne({ email });
        if (existingSuperadmin) {
            return res.status(400).json({ error: 'Super Admin already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);


        // Create a new superadmin
        const newSuperadmin = new Admin({
            email,
            userName,
            password: hashedPassword,
            phone_number,
            role: 'superadmin',
        });

        await newSuperadmin.save();
        return res.status(201).json({ message: `user registered successfully.`, user: newSuperadmin });
    } catch (error) {
        // Check for specific errors and provide appropriate error messages
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        } else {
            return res.status(500).json({ error: 'An error occurred while registering the user.' });
        }
    }
};

module.exports = { registerAdmin, registerBuyer, registerSeller, registerSuperadmin};

