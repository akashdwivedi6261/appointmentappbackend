require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const doctorController = require("./Controller/doctor.controller")
var cors = require('cors')

var app = express()
 
app.use(cors())

app.use("/doctors", doctorController);

app.listen(process.env.PORT, async () => {
     await mongoose.connect(process.env.MONGO_DB_URL).then(() => console.log("connected to mongo db")).
     catch((err) => console.log("not connected"))
    console.log("server is running on port", process.env.PORT);
})
