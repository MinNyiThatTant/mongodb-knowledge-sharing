const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
mongoose.set("strictQuery", false)
mongoose.connect("mongodb://127.0.0.1:27017/mymydb")

app.get('/', (req,res)=>{
    res.send("hello")
})

//schema
const schema ={
    name: String,
    email: String,
    id: Number
}

const mModel = new mongoose.model("TEACHER", schema)

app.post('/post', async(req,res)=>{
    console.log("connect to post")

    const data = new mModel({
        name:req.body.name,
        emai:req.body.email,
        id:req.body.id
    })

    const value = await data.save()
    res.json(value)

})

app.listen(3000, ()=> {
    
    console.log("connect port 3000")
    
})