var express = require('express');
var router = express.Router();
var {uploadImage,deleteImage,getCurrentUserImage} = require('../controllers/image')
var authentication = require('../middlewares/authentication')
// var images = require('../helpers/images')
/* GET home page. */
router.get('/',getCurrentUserImage)

// router.post('/',authentication,images.multer.single('image'),images.sendUploadToGCS,uploadImage)
router.delete('/:id',authentication,deleteImage)

module.exports = router;
