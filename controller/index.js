const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./model/connectDB');
const refreshToken = require("./middlewares/auth/refreshToken");
const {
    registerAdmin,
    registerBuyer,
    registerSeller,
    allUsers,
    getUser,
    loginAdmin,
    loginBuyer,
    loginSeller,
    loginSuperadmin,
    registerSuperadmin} = require("./routes");




const app = express();
const port = 5000;


connectDB();

// cors middleware
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Specify the path to the directory containing the static files
const staticFilesDir = path.join(__dirname, '../view/dist');

// Serve static files from the directory containing index.html
app.use(express.static(staticFilesDir));

// Route to serve the index.html file


// Routes
app.use(registerSuperadmin);
app.use(registerAdmin);
app.use(registerBuyer);
app.use(registerSeller);
app.use(loginAdmin);
app.use(loginBuyer);
app.use(loginSeller);
app.use(loginSuperadmin);
app.use(allUsers);
app.use(getUser);
app.use(refreshToken);






// app.get(getAllUsers); // Get all users route
//
app.get('*', (req, res) => {
    res.sendFile(path.join(staticFilesDir, 'index.html'));
});
//localhost
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
