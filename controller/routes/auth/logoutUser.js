const logoutUser = require('../../middlewares/postRequest/auth/logoutUser');
const express = require('express');
const router = express.Router();

router.post('/api/v1/auth/log-out', logoutUser);

module.exports = router;
