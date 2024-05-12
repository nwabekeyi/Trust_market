const express = require('express');
const router = express.Router();
const {superadminLogin} = require("../middlewares/login")

router.post('/api/v1/superadmin/login', superadminLogin);

module.exports = router;