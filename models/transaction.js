import mongoose from "mongoose";

const transSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    Type:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    }
})

const Transaction = mongoose.model('Transaction',transSchema);

export default Transaction;