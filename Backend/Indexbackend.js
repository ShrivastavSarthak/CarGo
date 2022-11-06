const express = require("express")
const mongoose = require("mongoose")
const app = express()
const connectToMongodb = require('./db')
const port =5000;


// THIS IS MIDDLEWARE
app.use(express.json())



// AVALIABLE ROUTES 
app.use("/api/auth",require("./routes/auth"))



app.listen(port,function(){
    console.log("connect to server on port " + port)
    connectToMongodb()
})