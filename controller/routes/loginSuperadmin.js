const {loginSuperAdmin } = require("../middlewares/auth/login");
const express = require('express');
const router = express.Router();

router.post('/api/v1/auth/superadmin', loginSuperAdmin);

module.exports = router;
