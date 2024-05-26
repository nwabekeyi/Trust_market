const express = require('express');
const jwt = require('jsonwebtoken');
const { Seller, Buyer, Admin } = require('../../../model/dbSchema/User');
require('dotenv').config();

const refreshToken = async (req, res) => {
    // Read the refresh token from the cookies
    console.log(req.cookies)
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(400).json({ error: 'Refresh token is required' });
    }

    try {
        // Verify the refresh token
        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: 'Cannot decode refresh token' });
        }

        // Find the user in the corresponding collection
        let user = await Buyer.findOne({ email: decoded.email });
        if (!user) user = await Seller.findOne({ email: decoded.email });
        if (!user) user = await Admin.findOne({ email: decoded.email });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        // Retrieve the refresh token from the database
        const storedRefreshToken = user.refreshToken;

        // Check if the refresh token matches
        if (storedRefreshToken !== refreshToken) {
            return res.status(403).json({ error: 'Invalid refresh token' });
        }

        // Generate a new access token
        const accessToken = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15m' });

        // Send the new access token in the response
        res.json({ accessToken });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Invalid or expired refresh token' });
    }
};

module.exports = refreshToken;
