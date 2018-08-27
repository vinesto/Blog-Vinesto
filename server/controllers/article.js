const User = require('../models/users')
const Article = require('../models/articles')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const addArticle = function (req, res) {

    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_KEY)
    let { title, body } = req.body
    Article.create({
        title: title,
        author: decoded.name,
        body: body,
        userId: decoded.id,
    })
        .then(function (newArticle) {
            res.status(200).json({ msg: "new Article added", Article: newArticle })
        })
        .catch(function (err) {
            res.status(500).json({ msg: "add Article failed", error: err })
        })

}

const deleteArticle = function (req, res) {

    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_KEY)
    Article.findOneAndRemove({
        _id: req.params.id,
        userId: decoded.id
    })
        .then(function (deletedTask) {
            if (deletedTask.n === 0) {
                res.status(201).json({ message: "no Article found" })
            } else {
                res.status(200).json({ message: "Article delete success" })
            }
        })
        .catch(function (err) {
            res.status(500).json({ message: "error delete task", err: err })
        })
}

const updateArticle = function (req, res) {

    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_KEY)
    let { title, body } = req.body
    Article.findOneAndUpdate({
        _id: req.params.id,
        userId: decoded.id
    }, {
            title: title,
            body: body
        })
        .then(function (updatedTask) {
            if (updatedTask.n === 0) {
                res.status(201).json({ message: "no Article found" })
            } else {
                res.status(200).json({ message: "update Article success" })
            }
        })
        .catch(function (err) {
            res.status(500).json({ message: "update Article failed", err: err })
        })

}

const getAllArticle = function (req, res) {
    Article.find({})
        .then(function (Articles) {
            if (Articles) {
                res.status(200).json({ message: "Articles found", dataArticles: Articles })
            } else {
                res.status(404).json({ message: "Articles not found" })
            }
        })
        .catch(function (err) {
            res.status(500).json({ message: "error get Articles" })
        })

}

const getUserArticle = function (req, res) {
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_KEY)
    Article.find({
        userId: decoded.id
    })
        .then(function (Articles) {
            if (Articles) {
                res.status(200).json({ message: "Articles found", dataArticles: Articles })
            } else {
                res.status(404).json({ message: "Articles not found" })
            }
        })
        .catch(function (err) {
            res.status(500).json({ message: "error get Articles" })
        })
}

const getOneArticle = function (req, res) {
    Article.findOne({
        _id: req.params.id,
        // userId: decoded.id
    })
        .then(function (Article) {
            if (Article) {
                res.status(200).json({ message: "Article found", dataArticle: Article })
            } else {
                res.status(404).json({ message: "Article not found" })
            }
        })

}

const getArticleByTitle = function (req, res) {
    Article.find({
        // userId: decoded.id,
        title: req.query.title
    })
        .then(function (ArticlesByTitle) {
            res.status(200).json({ message: "Articles by title found", dataArticles: ArticlesByTitle })
        })
        .catch(function (err) {
            res.status(404).json({ message: "Articles not found" })
        })
}

const addArticleComment = function (req, res) {

    console.log("ini body =========", req.body);
    console.log("ini req.params =======", req.params.id);

    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_KEY)
    let { body } = req.body

    console.log("ini token ---------", token);
    console.log("ini decoded ---------", decoded);
    Article.updateOne({
        _id: req.params.id
    },
        {
            $push: {
                comments: {
                    body: body,
                    name: decoded.name,
                    userId: decoded.id
                }
            }
        }
    )
        .then(function (newArticleComment) {
            console.log('ini new comment +++++++++++++', newArticleComment);
            res.status(200).json({ msg: "new Article comment added", Comment: newArticleComment })
        })
        .catch(function (err) {
            console.log("masuk errror");
            res.status(500).json({ msg: "add Article comment failed", error: err })
        })

}

const deleteArticleComment = function () {
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_KEY)
    Article.remove({
        comment: {
            _id: req.params.id,
            userId: decoded.id
        }
    })
        .then(function (deleteComment) {
            res.status(200).json({ msg: "Delete comment success", Comment: deleteComment })
        })
        .catch(function (err) {
            res.status(500).json({ msg: "Delete comment failed", error: err })
        })
}

// const getComment = function(){
//     Article.
// }



module.exports = {
    addArticle,
    deleteArticle,
    updateArticle,
    getAllArticle,
    getUserArticle,
    getOneArticle,
    getArticleByTitle,
    addArticleComment,
    deleteArticleComment
}

