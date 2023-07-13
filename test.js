const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
mongoose.set("strictQuery", false)
mongoose.connect("mongodb://127.0.0.1:27017/mynewdbdb", {

}, (err) => {
    if (!err) {
        console.log("Connect to Mongodb")
    } else {
        console.log(err)
    }
})

//schema
const schema = {
    name: String,
    email: String,
    id: Number
}

const mModel = mongoose.model("Teacher", schema)


//POST
app.post('/post', async(req, res)=>{
    console.log("this is work")

    const data = new mModel({
        name : req.body.name,
        email : req.body.email,
        id : req.body.id
    })

    const value = await data.save()
    res.json(value)

})

//PUT
app.put("/upt/:id", (req, res)=>{
    let upid=req.params.id;
    let upname = req.body.name;
    let upemail = req.body.email;

    mModel.findOneAndUpdate({id:upid}, {$set: {name:upname, email:upemail}}, {new:true}, (err, data)=>{
        if(data==null){
            res.send('cannot add because no your id not here')
        }else{
            res.send(data)
        }
    })

})

//RETERIVE
app.get('/get/:id', (req,res)=>{
    getid = req.params.id;

    mModel.find({id:getid}, (err,data)=>{
        if(data.length==0){
            res.send("no data you find")
        }else{
            res.send(data)
        }
    })
})

//DELETE
app.delete('/del/:id', (req, res)=>{
    delid = req.params.id;

    mModel.findOneAndDelete({id:delid}, (err,data)=>{
        if(data==null){
            res.send('no data to delete')
        }else{
            res.send(data)
        }
    })
})
 


app.listen(3000, () => {
    console.log("connect to port 3000")
})