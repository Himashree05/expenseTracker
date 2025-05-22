import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/UserRoutes.js';
import transRoutes from './routes/TransactionRoutes.js';

dotenv.config();
const app = express();
app.use(express.json())
app.use('/user',userRouter);
app.use('/trans',transRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/expenseTracker").then(()=>{
    console.log("mongo db is connected")
});


app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(process.env.PORT,()=>{
    console.log("server is listening in port 3000")
    console.log("http://localhost:3000")
})