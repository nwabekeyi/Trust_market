const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../middlewares/getUser');
const verifyToken = require("../middlewares/auth/verifyAccessToken"); // Import verifyToken middleware

router.get('/api/v1/users', verifyToken, getAllUsers); // Attach verifyToken middleware before getAllUsers

module.exports = router;
