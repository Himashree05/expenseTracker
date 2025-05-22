import User from "../models/User.js";
import bcrypt from "bcryptjs";

const addUser = async (req,res)=>{
    const user = req.body;
    console.log(user);
    const findUser = await User.findOne({name:user.name});
    if(findUser)
    {
        res.status(404).json("user already exist");
    }

    else
    {
        const hashedPassword = await bcrypt.hash(user.password,10);
        const newUser = {name:user.name , password:hashedPassword}
        const savedUser = await User.create(newUser)
        res.status(201).json("user created successfully");
    }
}

export default addUser;