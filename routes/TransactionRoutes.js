import {Router} from "express"
import express from 'express';
import {addTransaction,getUserTransactions,deleteUserTransaction, editTransactions,getBalance} from "../service/transactionService.js";


const transRoutes = express.Router();

transRoutes.post('/addTrans',addTransaction);
transRoutes.post('/delete',deleteUserTransaction);
transRoutes.post('/edit',editTransactions)
transRoutes.post('/getAll',getUserTransactions)
transRoutes.post('/balance',getBalance);


export default transRoutes;

