const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
mongoose.set("strictQuery", false)
mongoose.connect("mongodb://127.0.0.1:27017/dbnew",{

},(err)=>{
    if(!err){
        console.log("connect mongodb")
    }else{
        console.log(err)
    }
})

///Schema
const Schema ={
    name: String,
    email: String,
    id: Number
}

const mModel = mongoose.model("TEACHER",Schema)

//Post
app.post('/post',async(req, res)=>{
    console.log("this work ")

    const data = new mModel({
        name: req.body.name,
        email: req.body.email,
        id: req.body.id

    })
        const value = await data.save()
        res.json(value)
})

app.listen(3000,()=>{
    console.log("connect 3000")
})