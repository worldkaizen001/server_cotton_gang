const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');
const productRoutes = require("./src/product/routes");
const config = require('./config')

const app = express();
app.use(bodyParser.json()); 
app.use(cors());

const port = process.env.PORT || config.PORT;


// app.get("/", (req, res)=> {
//     res.send("we are live on server");
// })

app.use("/api/v1/product",productRoutes)

app.listen(port, (req, res)=>{
    console.log("we are live on port" + port);
})