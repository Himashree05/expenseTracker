import addUser from "../service/userService.js";
import {Router} from "express"
import express from 'express';

const userRouter =  express.Router();

userRouter.post('/adduser',addUser);

export default userRouter;