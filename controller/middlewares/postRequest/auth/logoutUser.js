const jwt = require('jsonwebtoken');
const { Seller, Buyer, Admin } = require('../../../model/dbSchema/User');
require('dotenv').config();

const logoutUser =  async (req, res) => {
    try {
        // Read the refresh token from the cookies
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(400).json({ error: 'Refresh token is required' });
        }

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

        // Invalidate the refresh token by removing it from the database
        user.refreshToken = undefined;
        await user.save();

        // Clear the refresh token cookie
        res.clearCookie('refreshToken');

        res.json({ message: 'Logout successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = logoutUser