const express = require('express');
const router = express.Router();
const { getUser } = require('../../middlewares/getRequest/getUsers/getUsers');
const verifyToken = require("../../middlewares/postRequest/auth/verifyAccessToken"); // Import verifyToken middleware


router.get('/api/v1/users/:userId', getUser);

module.exports = router;