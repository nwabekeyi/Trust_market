const {loginSuperAdmin } = require("../../middlewares/postRequest/auth/login");
const express = require('express');
const router = express.Router();

router.post('/api/v1/auth/superadmin', loginSuperAdmin);

module.exports = router;
