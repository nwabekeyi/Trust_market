require('dotenv').config();
const { Seller, Buyer, Admin } = require('../../../model/dbSchema/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const loginUser = async (req, res, role) => {
  const { email, password } = req.body;
  const expiresIn = 900; // 15 minutes in seconds


  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find the user by email and role
    let user = null;

    if (role === 'buyer') {
      user = await Buyer.findOne({ email});
    } else if (role === 'seller') {
      user = await Seller.findOne({ email});
    } else {
      user = await Admin.findOne({ email});
    }

    console.log(user);

    if (!user || (user.role !== role && user.role !== 'admin' && user.role !== 'superadmin')) {
      return res.status(401).json({ message: 'Invalid email, password, or role' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email, password, or role' });
    }

    const accessToken = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, { expiresIn });
    const refreshToken = jwt.sign({ email: user.email }, JWT_SECRET);

    // Store the refresh token in the database
    user.refreshToken = refreshToken;
    await user.save();

    // Set refresh token as HTTP-only cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict', // Prevent CSRF attacks
      maxAge: 10 * 365 * 24 * 60 * 60 * 1000 // 10 years
    });

    res.json({  accessToken, expiresIn, userId: user._id });
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
