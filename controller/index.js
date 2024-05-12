const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./model/connectDB');
const superadminLoginRoute = require("./routes/login")

const app = express();
app.use(express.json());
const port = 3000;

connectDB();

// cors middleware
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Specify the path to the directory containing the static files
const staticFilesDir = path.join(__dirname, '../view/dist');

// Serve static files from the directory containing index.html
app.use(express.static(staticFilesDir));

// Route to serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(staticFilesDir, 'index.html'));
});

//superadmin login API
app.use(superadminLoginRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
