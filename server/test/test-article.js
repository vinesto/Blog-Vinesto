// var assert = require('assert');
var chai = require('chai')
var expect = chai.expect
var chaiHttp = require('chai-http')
var mongoose = require('mongoose')
// var User = require('../models/users')
var Article = require('../models/articles')
chai.use(chaiHttp)

describe('Article', function () {

    // beforeEach(function (done) {
        // mongoose.connect('mongodb://testing-blog:testing123@ds125932.mlab.com:25932/testing-blog-db', function () {

            // Article.collection.drop()

            // Article.create({
            //     title: 'testing title',
            //     author: 'vinesto',
            //     body: 'isi article testing',
            //     comments: [{ body: 'bagus', date: 19 - 02 - 2018 }]
            // }, function (err, result) {
            //     done()
            // })
        // })
        // done()
    // })


    it('POST /articles should be a object of new article', function (done) {
        chai.request('http://localhost:3000')
            .post('/articles')
            .send({
                title: 'testing title post /article',
                author: 'vinesto post',
                body: 'isi article testing post /article',
                comments: [{ body: 'bagus', date: 19 - 02 - 2018 }],
                token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoib3EiLCJlbWFpbCI6Im9xQG1haWwuY29tIiwiaWF0IjoxNTM0ODM1MzEwfQ.7Twi2HRkStuIK6QE-jRNXO1jimPhSQD2Tk9Su7LNF8M"
            })
            .end(function (err, res) {
                console.log(res.body);


                expect(err).to.be.null;
                expect(res).to.have.status(201);
                expect(res).to.be.a('object')
                done()
            })
    });

    it('GET /articles should be a get all article', function (done) {
        chai.request('http://localhost:3000')
            .get('/articles')

            .end(function (err, res) {
                console.log(res.body);


                expect(err).to.be.null;
                expect(res).to.have.status(201);
                expect(res).to.be.a('object')
                done()
            })
    });
});