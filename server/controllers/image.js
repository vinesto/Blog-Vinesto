const Image = require('../models/images')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const uploadImage = function (req, res) {
    console.log("upload image");
    const token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_KEY)
    Image.create({
        userId: decoded.id,
        url: req.file.cloudStoragePublicUrl
    })
        .then(function (newImage) {
            res.status(200).json({ msg: "upload image success", image: newImage })
        })
        .catch(function (err) {
            res.status(500).json({ msg: "upload image failed", error: err.message })
        })

}

const deleteImage = function (req, res) {
    console.log("delete image");

    Image.remove({
        _id: req.params.id
    })
        .then(function () {
            res.status(200).json({
                message: 'delete image success'
            })
        })
        .catch(function (err) {
            res.status(500).json({
                message: 'delete image failed'
            })
        })

}

const getCurrentUserImage = (req, res) => {
    console.log("get current user image");

    const token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_KEY)
    Image.find({
        userId: decoded.id
    })
        .populate('user')
        .then(function(image){
            res.status(200).json({msg:"success get photo", data:image})
        })
        .catch(err => {
            console.log('masukk error');
            
            res.status(500).json({msg:"failed get photo", error:err.message})
        })
}

module.exports = { uploadImage, deleteImage, getCurrentUserImage }