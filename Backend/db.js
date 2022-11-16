const mongoose = require('mongoose')


// const mongoUrl= "mongodb://localhost:27017/Gocar"
const mongoUrl= "mongodb+srv://sarthak:1234@gocar.wcqjvuk.mongodb.net/test"

const connectToMongodb= () =>{
    mongoose.connect(mongoUrl,()=>{
        console.log("Connected to mongodb")
    })
}

module.exports = connectToMongodb;