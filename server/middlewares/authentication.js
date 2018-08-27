const User = require('../models/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViN2UzMWM2MTI3NzM1MjY5NzFmZWUwZSIsIm5hbWUiOiJtYWRlIiwiZW1haWwiOiJtYWRlQG1haWwuY29tIiwiaWF0IjoxNTM0OTk3Nzg4fQ.QT9XuwLJxl3b55XMYCGCF1h0TPwiT2uXvmsActteJ_w

const authentication = (req, res, next) => {
    // console.log('masuk authne');
    
    let token = req.headers.token
    if(token){
        let decode = jwt.verify(token, process.env.JWT_KEY)
        // console.log(decode);
        User.findOne({_id: decode.id})
        .then((data) => {
            if(data){
                // console.log('masuk then auth');
                
                next()
            }else{
                res.status(400).json({
                    message: "User not found"
                })
            }
        }).catch((err) => {
            res.status(400).json({
                message: 'Login failed'
            })
        });
        
    }else{
        res.status(400).json({
            msg: 'User must be Log In'
        })
    }
}

module.exports = authentication