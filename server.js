const express = require("express");

const app = express();

const port = 5000;

app.get('/home', (req, res)=>{
    res.send("we are Home, Kay Kay Boy you go go far ooo boy");
})

app.get('/products', (req, res)=>{
    res.send("this is a list of all productssi")
})

app.listen(port, (req, res)=>{
    console.log("we are live on port" + port);
})