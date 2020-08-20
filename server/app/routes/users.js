var express = require('express');
var router = express.Router();
var User = require('../models/user')
router.post('/register', function(req, res, next){
    var user = new User({
        email:req.body.email,
        username:req.body.username,
        password:User.hashedPassword(req.body.password),
        createdAt:Date.now()
    });
    let promise = user.save();
    promise.then((doc)=>{
        return res.satuts(201).json(doc)
    })

    promise.catch((err)=>{
        return res.satuts(501).json({message:'Error registering user.'})
    })
});

module.exports = router;