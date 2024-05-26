const {registerSeller} = require("../../middlewares/postRequest/registerUsers");
const express = require('express');
const router = express.Router();

router.post('/api/v1/register/seller', registerSeller);

module.exports = router;