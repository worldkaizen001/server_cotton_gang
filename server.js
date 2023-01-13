const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();
const productRoutes = require("./src/product/routes");
const config = require('./config')

const app = express();
app.use(bodyParser.json()); 

const port = process.env.PORT || config.PORT;


app.use("/api/v1/product",productRoutes)

app.listen(port, (req, res)=>{
    console.log("we are live on port" + port);
})