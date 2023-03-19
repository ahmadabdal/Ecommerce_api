const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const connectToDB = require("./config/mongoose");
const app = express();

// All API route goes here
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectToDB();

const PORT =process.env.PORT;
app.use('/', require('./routes/index'));



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

