const express = require('express');
const router = express.Router();
const { getUser, getAllUsers } = require('../middlewares/getUser');


router.get('/api/v1/users', getAllUsers);

module.exports = router;