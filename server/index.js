var createError = require('http-errors')
var express = require('express')
var path= require('path')
var cookieParser = require('cookie-parser')
const connectDB = require('./app/util/db')
const bodyParser = require('body-parser');

const dotenv = require('dotenv')
dotenv.config();
//var logger = require('morgan')
var app = express()

const port = process.env.port || 3000;
connectDB();

const jwt = require('jsonwebtoken')
// routers here
var usersRouter = require('./app/routes/users')
const authRouter = require('./app/routes/auth')


//add mongoose
var mongoose = require('mongoose')
//mongoose.connect('')
app.use(bodyParser.urlencoded({ extended: true }));
authRouter.use(bodyParser.json())
app.use(express.json());
app.use('/api/user',authRouter)

app.use(cookieParser());

//add cors
var cors = require('cors')
app.use(cors({
    origin:'http://localhost:4200'
}))

app.post('/api/posts', (req, res)=>{
  res.json({
    message:"post created ..."
  })
})

app.post('/api/login', (req, res)=>{
  jwt.sign()
})

app.listen(port, () => {
  console.log('server started')
})

module.exports = app;
