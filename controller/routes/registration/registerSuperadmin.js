const {registerSuperadmin} = require('../../middlewares/postRequest/registerUsers');

const express = require('express');


const router = express.Router();

router.post('/api/v1/register/superadmin', registerSuperadmin);

module.exports = router;