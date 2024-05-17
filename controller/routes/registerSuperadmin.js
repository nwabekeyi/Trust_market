const {registerSuperadmin} = require('../middlewares/registerUsers');

const express = require('express');


const router = express.Router();

router.post('/api/v1/register/superadmin', registerSuperadmin);

module.exports = router;