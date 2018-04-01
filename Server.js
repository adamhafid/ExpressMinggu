//calling library 
const express = require('express')
// execute express
const app=express()

//fungsi helloworld
const helloworld = (request, respond)=>
respond.send('hello world')

//fungsi user get name dan adress
const userFunction=(req, res)=>{
const {name, address}=req.params
res
    .status(200)
    .json({
        name,
        address,
    })
}

//get root request
app.get('/',helloworld)

app.get('/:name/:address',userFunction)
// set express to running on port 3000
app.listen(3000)