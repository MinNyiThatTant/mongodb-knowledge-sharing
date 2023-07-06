const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hell browser')
})

app.listen(3000, () => {
    console.log('hello port 3000')
})