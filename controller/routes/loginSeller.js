const {loginSeller } = require("../middlewares/auth/login");
const express = require('express');
const router = express.Router();

router.post('/api/v1/auth/seller', loginSeller);

module.exports = router;
