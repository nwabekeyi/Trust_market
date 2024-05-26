const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const proxy = require('http-proxy-middleware');
const connectDB = require('./model/connectDB');
const {
    registerAdmin,
    registerBuyer,
    registerSeller,
    loginAdmin,
    loginBuyer,
    loginSeller,
    loginSuperadmin,
    registerSuperadmin,
    refreshToken,
    logoutUser,
    getUser,
    getAllUser
} = require("./routes");

const app = express();
const port = 5000;

connectDB();

// CORS middleware
const allowedOrigins = [
    'http://localhost:5173',
    'https://trust-market-frontend.vercel.app'
];

app.use(cors({
    origin: allowedOrigins
}));

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use(registerSuperadmin);
app.use(registerAdmin);
app.use(registerBuyer);
app.use(registerSeller);
app.use(loginAdmin);
app.use(loginBuyer);
app.use(loginSeller);
app.use(loginSuperadmin);
app.use(refreshToken);
app.use(logoutUser);
app.use(getAllUser);
app.use(getUser);

// Proxy requests to frontend for non-API routes
app.use('*', proxy({
    target: 'https://trust-market-frontend.vercel.app',
    changeOrigin: true
}));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
