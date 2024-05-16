const {loginBuyer } = require("../middlewares/auth/login");
const express = require('express');
const router = express.Router();

router.post('/api/v1/auth/buyer', loginBuyer);

module.exports = router;
