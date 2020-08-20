var createError = require('http-errors')
var express = require('express')
var path= require('path')
var cookieParser = require('cookie-parser')
//var logger = require('morgan')
var app = express()

// routers here
var usersRouter = require('./routes/users')
//add mongoose
var mongoose = require('mongoose')
//mongoose.connect('')

app.use(express.json());
app.use(cookieParser());

//add cors
var cors = require('cors')
app.use(cors({
    origin:'http://localhost:4200'
}))

app.listen(3000, () => {
  console.log('Example app listening at ')
})

module.exports = app;