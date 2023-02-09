const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require('./Routes/Route')

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log('mongoose connected');
        })
        .catch((e)=>{
            console.log(e);
        })
app.use(routes);

app.listen(PORT , ()=> console.log(`Lisening on port ${PORT}`))