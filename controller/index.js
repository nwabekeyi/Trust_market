const express = require('express');
const requestIp = require('request-ip');
const cors = require('cors');
const connectDB = require('./model/connectDB');

const app = express();
const port = 3000;

// Middleware to extract IP address from request headers

app.use(cors({
    origin: 'http://localhost:5173'
  }));

connectDB()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
