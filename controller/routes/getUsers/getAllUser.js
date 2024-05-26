const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../../middlewares/getRequest/getUsers/getUsers');
const verifyToken = require("../../middlewares/postRequest/auth/verifyAccessToken"); // Import verifyToken middleware

router.get('/api/v1/users', verifyToken, getAllUsers); // Attach verifyToken middleware before getAllUsers

module.exports = router;
