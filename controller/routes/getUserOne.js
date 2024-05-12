const express = require('express');
const router = express.Router();
const { getUser} = require('../middlewares/getUser');


router.get('/api/v1/users/:userId', getUser);

module.exports = router;