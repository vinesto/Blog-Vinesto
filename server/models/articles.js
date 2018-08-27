const mongoose = require('mongoose')
const Schema = mongoose.Schema

var articleSchema = new Schema({
    title: String,
    author: String,
    body: String,
    image: String,
    userId: Schema.Types.ObjectId,
    comments: [{
        body: String,
        date: Date,
        name:String,
        userId:
        {
            ref: 'User',
            type: Schema.Types.ObjectId
        }
    }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
}, {
        timestamps: true
    })

var Article = mongoose.model('Article', articleSchema)

module.exports = Article