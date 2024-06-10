const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../../middlewares/getRequest/getProducts');
const verifyToken = require("../../middlewares/postRequest/auth/verifyAccessToken"); // Import verifyToken middleware

router.get('/api/v1/products', getAllProducts); // Attach verifyToken middleware before getAllUsers

module.exports = router;
