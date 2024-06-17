const express = require('express');
const router = express.Router();
const productRating = require('../../middlewares/postRequest/products/productRating');


router.post('/:productId/:sellerId/review/:rating', productRating);
module.exports = router;