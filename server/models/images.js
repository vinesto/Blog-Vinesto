const mongoose = require('mongoose')
const Schema = mongoose.Schema

var imageSchema = new Schema ({
    url : String,
    userId:{
        ref:'User',
        type:Schema.Types.ObjectId
    }
})

var image = mongoose.model('Image',imageSchema)

module.exports =  image