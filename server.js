const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');
const productRoutes = require("./src/product/routes");
const config = require('./config')
const controller = require('./src/product/controller')


const app = express();
app.use(bodyParser.json()); 
app.use(cors());

const port = process.env.PORT || config.PORT;


// app.get("/", controller.getProducts),
app.get("/", (req, res)=>{
    res.send('we dey live o');
})

// app.use("/api/v1/produc",productRoutes)

app.listen(port, (req, res)=>{
    console.log("we are live on port" + port);
})