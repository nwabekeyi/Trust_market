const express = require('express');
const router = express.Router();
const multer = require('multer');
const postProduct = require('../../middlewares/postRequest/products/postsproduct');

const upload = multer({ dest: 'uploads/' }); // Temporary storage before uploading to Dropbox

router.post('/api/v1/post-product', upload.array('pictures', 5), postProduct);

module.exports = router;