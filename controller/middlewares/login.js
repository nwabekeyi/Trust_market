require('dotenv').config();

const User = require('../model/dbSchema/User');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const superadminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find the user by email and role (assuming 'superadmin' role is 'superadmin')
    const user = await User.findOne({ email, role: 'superadmin' });

    if (!user || !password) {
      return res.status(401).json({ message: 'Invalid email, password, or role' });
    }

    const accessToken = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ email: user.email }, JWT_SECRET);

    // Store the refresh token in the database
    user.refreshToken = refreshToken;
    await user.save();

    res.json({ accessToken, refreshToken });
    console.log('superadmin loggedin')
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { superadminLogin };
