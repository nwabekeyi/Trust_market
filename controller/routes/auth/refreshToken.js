const refreshToken = require("../../middlewares/postRequest/auth/refreshToken");
const express = require('express');
const router = express.Router();

router.post('/api/v1/auth/refresh-token', refreshToken);

module.exports = router;