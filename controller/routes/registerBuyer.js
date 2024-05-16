const {registerBuyer} = require("../middlewares/registerUsers");
const express = require('express');
const router = express.Router();

router.post('/api/v1/register/buyer', registerBuyer);

module.exports = router;