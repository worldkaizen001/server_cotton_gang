const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();
const studentRoutes = require("./src/todos/routes");
const config = require('./config')

const app = express();
app.use(bodyParser.json()); 

const port = config.PORT;

app.use("/api/vi/students",studentRoutes)

app.listen(port, (req, res)=>{
    console.log("we are live on port" + port);
})