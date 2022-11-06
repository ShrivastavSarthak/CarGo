const mongoose = require('mongoose')


const mongoUrl= "mongodb://localhost:27017/Gocar"

const connectToMongodb= () =>{
    mongoose.connect(mongoUrl,()=>{
        console.log("Connected to mongodb")
    })
}

module.exports = connectToMongodb;