require('dotenv').config();
const User = require('../../model/dbSchema/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const loginUser = async (req, res, role) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find the user by email and role
    const user = await User.findOne({ email, role });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email, password, or role' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email, password, or role' });
    }

    const accessToken = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ email: user.email }, JWT_SECRET);

    // Store the refresh token in the database
    user.refreshToken = refreshToken;
    await user.save();

    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const loginBuyer = (req, res) => loginUser(req, res, 'buyer');
const loginSeller = (req, res) => loginUser(req, res, 'seller');
const loginAdmin = (req, res) => loginUser(req, res, 'admin');
const loginSuperAdmin = (req, res) => loginUser(req, res, 'superadmin');

module.exports = { loginBuyer, loginSeller, loginSuperAdmin, loginAdmin };
