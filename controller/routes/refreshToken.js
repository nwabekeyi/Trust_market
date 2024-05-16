const refreshToken = require("../middlewares/auth/refreshToken");
const express = require('express');
const router = express.Router();

router.post('/api/v1/refresh-token', refreshToken);

module.exports = router;