const express = require('express');
const router = express.Router();
const { getProductById } = require('../../middlewares/getRequest/getProducts');
const verifyToken = require("../../middlewares/postRequest/auth/verifyAccessToken"); // Import verifyToken middleware

router.get('/api/v1/products/:id', getProductById); // Attach verifyToken middleware before getAllUsers

module.exports = router;
