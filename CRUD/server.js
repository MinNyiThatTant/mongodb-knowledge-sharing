const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())


mongoose.set("strictQuery",false)
mongoose.connect("mongodb://127.0.0.1:27017/mydb",{

},(err)=> {
    if(!err){
        console.log("|connect mongodb")
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

const newmodel = mongoose.model("TEACHER", schema)

//post
app.post("/post", async(req, res)=> {
    console.log("that port work")
    const data = newmodel({
        name:req.body.name,
        email:req.body.email,
        id: req.body.id
    })
    const value = await data.save()
    res.json(value)
})

app.listen(3000, ()=> {
    console.log("port 3000")
})