 import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import router from './routes/authRoute.js';
import cors from 'cors';
//we need to configure env
dotenv.config()//database config
connectDB();
//rest object
const app=express();
//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
//routes
app.use("/api/v1/auth",router);
//rest api
app.get("/",(req,res)=>{
    res.send("<h1>welcome to ecommerce app</h1>");
});//port
const PORT=process.env.PORT||8093//run listen
app.listen(PORT,()=>{
    console.log(`server running ${process.env.DEV_MODE} on ${PORT}`)
})