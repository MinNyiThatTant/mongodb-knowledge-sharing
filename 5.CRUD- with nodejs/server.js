const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mydb",{

},(err)=> {
    if(!err){
        console.log("|connect mongodb")
    }else{
        console.log(err)
    }
})

app.listen(3000, ()=> {
    console.log("port 3000")
})