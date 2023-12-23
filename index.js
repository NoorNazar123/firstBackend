// import express from "express";
const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()


app.get('/', (req, res) => {
   res.send('Hello World!')
});

app.get('/facebook', (req, res)=>{
   res.send("Facebook Hammad")
});
app.get('/login',(req, res)=>{
   res.send("<h1>Welcome to facebook</h1>");
});

app.get('/youtube',(req , res)=>{
   res.send("<a>Youtube<a>")
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})