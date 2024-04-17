const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('hi')
})

app.listen(3000, ()=> {
    console.log('node server is running on port 3000');
})