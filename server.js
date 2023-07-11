const express = require('express')
const mongoose = require('mongoose')
const app=express()
app.use(express.json())

mongoose.set("strictQuery",false)
mongoose.connect("mongodb://127.0.0.1:27017/univdb", {
},(err)=>{
    if(!err){
        console.log('good db connect')
    }else{
        console.log(err)
    }
})

//schema
const schema = {
    name: String,
    email: String, 
    id: Number
}

const dbmodel = mongoose.model("dept", schema)

//post
app.post('/some', async(req,res)=>{
    console.log('some post')
    
    const data = new dbmodel({
        name: req.body.name,
        email: req.body.email,
        id: req.body.id
    })

    const a  = await data.save()
    res.json(a)
})




app.listen(3000, ()=> {
    console.log('3000')
})