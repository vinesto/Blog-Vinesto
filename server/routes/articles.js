var express = require('express');
var router = express.Router();
var authentication = require('../middlewares/authentication')
var {addArticle,deleteArticle,updateArticle,getAllArticle,getOneArticle,getArticleByTitle, getUserArticle, addArticleComment} = require('../controllers/article')
// var {register,login} = require('../controllers/user')
/* GET users listing. */
router.get('/',getAllArticle)
router.get('/title',getArticleByTitle)
router.get('/user',authentication,getUserArticle)
router.get('/:id',getOneArticle)

router.post('/',authentication,addArticle);
router.put('/:id',authentication,updateArticle);
router.put('/:id/comment',authentication,addArticleComment)
router.delete('/:id',authentication,deleteArticle);

module.exports = router;