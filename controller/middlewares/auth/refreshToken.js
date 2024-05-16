const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../../model/dbSchema/User');
require('dotenv').config(); 



const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(400).json({ error: 'Refresh token is required' });
    }

    try {
        // Verify the refresh token
        const decoded = jwt.verify(refreshToken, process.env.JWT_TOKEN);

        // Check if user exists in the database
        const user = await User.findOne({ email: decoded.email });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        // Generate a new access token
        const accessToken = jwt.sign({ email: user.email, role: user.role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

        // Send the new access token in the response
        res.json({ accessToken });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Invalid or expired refresh token' });
    }
};

module.exports = refreshToken;
