// var assert = require('assert');
var chai = require('chai')
var expect = chai.expect
var chaiHttp = require('chai-http')
var mongoose = require('mongoose')
var User = require('../models/users')
var Article = require('../models/articles')
chai.use(chaiHttp)

// describe('User', function () {

    // beforeEach(function (done) {
    //     mongoose.connect('mongodb://testing-blog:testing123@ds125932.mlab.com:25932/testing-blog-db', function () {

    //         User.collection.drop()

    //         User.create({
    //             name:"oq",
    //             email:"oq@mail.com",
    //             password:"1234"
    //         }, function (err, result) {
    //             done()
    //         })
    //     })
    //     done()
    // })

//     it('POST /users/register should be a object', function (done) {
//         chai.request('http://localhost:3000')
//             .post('/users/register')
//             .send({
//                 name: "ade",
//                 email: "ade@mail.com",
//                 password: "1234"
//             })
//             .end(function (err, res) {
//                 console.log(res.body);


//                 expect(err).to.be.null;
//                 expect(err).to.have.status(400)
//                 expect(res).to.have.status(200);
//                 // expect(res).to.be.a('object')
//                 done()
//             })
//     });

//     it('POST /users/login should be a get object token', function (done) {
//         chai.request('http://localhost:3000')
//             .post('/users/login')
//             .send({
//                 email:'oq@mail.com',
//                 password:'1234'
//             })

//             .end(function (err, res) {
//                 console.log(res.body);


//                 expect(err).to.be.null;
//                 expect(res).to.have.status(200);
//                 expect(res).to.be.a('object')
//                 done()
//             })
//     });
// });



