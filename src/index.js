require('dotenv').config({path:'src/.env'})
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require("./routes/authRoutes")

//connect to mongoDB
const MONGODB_URI = process.env.MONGODB_URI

app.use(express.json())
app.use("/api/auth",authRoutes)
mongoose.connect(MONGODB_URI).then(()=>console.log('Connected to MongoDB')).catch((err)=>console.log(err))
app.get("/",(req,res)=>{
    res.send("Backend Server is running")
})
const PORT = process.env.PORT || 5000;

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})