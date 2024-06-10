const express = require('express');
const router = express.Router();
const { getOneProduct } = require('../../middlewares/getRequest/getProducts');
const verifyToken = require("../../middlewares/postRequest/auth/verifyAccessToken"); // Import verifyToken middleware

router.get('/api/v1/products', getOneProduct); // Attach verifyToken middleware before getAllUsers

module.exports = router;
