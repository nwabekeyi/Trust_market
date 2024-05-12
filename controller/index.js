const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./model/connectDB');
const superadminLoginRoute = require("./routes/login");
const verifyToken = require("./middlewares/verifyAccessToken"); // Corrected middleware import
const allUsers = require("./routes/getUser");
const getUser = require("./routes/getUserOne");


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
app.use(superadminLoginRoute); // Login route
// app.use(verifyToken()); //verifytoken
app.use(allUsers);
app.use(getUser);

// app.get(getAllUsers); // Get all users route
//
app.get('*', (req, res) => {
    res.sendFile(path.join(staticFilesDir, 'index.html'));
});
//localhost
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
