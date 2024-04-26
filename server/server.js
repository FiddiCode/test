import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose';
import authRoute from './routes/auth.routes.js';
import customerRoute from './routes/customer.routes.js'
import cors from 'cors';
import bodyParser from 'body-parser';


const app=express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

dotenv.config();

app.use(cors()); 

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database is connected successfully")
}).catch((err)=>{
    console.log("Error occured while connecting to database",err)
})



app.get("/",(req,res)=>{
      res.send("Welcome to Dashboard")
});

app.use("/api/v1",authRoute);
app.use("/api/v1/upload",customerRoute);



app.listen(process.env.PORT,()=>{
    console.log("Server is running at port",process.env.PORT)
})