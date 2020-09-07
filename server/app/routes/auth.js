const router = require('express').Router();
const user = require('../models/user')
const joi = require('@hapi/joi')



router.post('/register', async (req, res)=>{
  var User =   new user({
    name:req.body.name,
    email:req.body.email,
    username:req.body.username,
    password:req.body.password
  })
  try {
    const savedUser = await User.save()
    res.send(savedUser)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/login',(req,res)=>{

})

module.exports = router;
