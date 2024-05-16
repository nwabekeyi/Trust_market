const {registerAdmin} = require('../middlewares/registerUsers');

const express = require('express');

console.log(registerAdmin);


const router = express.Router();

router.post('/api/v1/register/admin', registerAdmin);

module.exports = router;
