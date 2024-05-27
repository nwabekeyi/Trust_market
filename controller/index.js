const express = require('express');
const cors = require('cors');
const path = require('path');
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
    getAllUser} = require("./routes");

const app = express();
const port = 5000;

connectDB();

// cors middleware
// Define allowed origins
const allowedOrigins = [
    'http://localhost:5173',
    'https://trust-market-frontend.vercel.app/'
];

// Configure CORS middleware
app.use(cors({
    origin: allowedOrigins
}));

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Specify the path to the directory containing the static files
const staticFilesDir = path.join(__dirname, '../view/dist');

// Serve static files from the directory containing index.html
app.use(express.static(staticFilesDir));

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


// Route to serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(staticFilesDir, 'index.html'));
});
//localhost
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
