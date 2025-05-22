import mongoose from "mongoose";
import Transaction from "./transaction.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    transaction: [
        {
            userName: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            Type: {
                type: String,
                required: true
            },
            category: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            }
        }
    ]
});



const User = mongoose.model('User',userSchema);

export default User;