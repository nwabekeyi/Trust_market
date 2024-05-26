const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
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
// Define allowed origins
const allowedOrigins = [
    'http://localhost:5173',
    'https://trust-market-frontend.vercel.app'
];

// Configure CORS middleware
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

// Handle 404 Not Found
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/error404.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
