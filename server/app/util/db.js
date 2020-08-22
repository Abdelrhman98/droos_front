const mongoose = require('mongoose')
const user = 'bodey';
const password = '01144046291a';
const URI = `mongodb+srv://${user}:${password}@cluster0.yl1lj.mongodb.net/droos?retryWrites=true&w=majority`


const connectDB = async()=> {
    await mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('database connected.....!')
}

module.exports = connectDB;