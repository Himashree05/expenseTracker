import User from "../models/User.js";
import Transaction from "../models/transaction.js";

const addTransaction = async(req,res)=>{
    const username = req.body.userName;
    const user = await User.findOne({name:username});

    if(!user)
    {
        res.status(404).json("user do not exist add user and then proceed")
    }

    else
    {
        // const amount = req.body.amount;
        // const type = req.body.type;
        // const category = req.body.category;
        // const description = req.body.description;

        const trans = {userName:username,amount:req.body.amount,Type:req.body.Type,category:req.body.category,description:req.body.description};

        const newTransaction = await Transaction.create(trans);

        const usertransaction={userName:username,amount:req.body.amount,Type:req.body.Type,category:req.body.category,description:req.body.description}
        user.transaction.push(usertransaction);
        await user.save();

        return res.status(201).json("created");
    }
}




const getUserTransactions = async (req, res) => {
    const username = req.body.userName; 
    const user = await User.findOne({ name: username });

    if (!user) {
        return res.status(404).json("User does not exist");
    }

    return res.status(200).json(user.transaction); 
};



const deleteUserTransaction = async (req, res) => {
    const username = req.body.userName;
    const transactionIndex = req.body.index; 
    
    const user = await User.findOne({ name: username });
    //return res.json(user.transaction.length);
    if (!user) {
        return res.status(404).json("User does not exist");
    }

    user.transaction.splice(transactionIndex, 1);
    await user.save();

    return res.status(200).json("Transaction deleted");
};

const editTransactions = async (req, res) => {
    const username = req.body.userName;
    const transactionIndex = req.body.index;
    const user = await User.findOne({ name: username });

    if (!user) {
        return res.status(404).json("User does not exist");
    }

    const transaction = user.transaction[transactionIndex];
    if (req.body.amount !== undefined) transaction.amount = req.body.amount;
    if (req.body.Type !== undefined) transaction.Type = req.body.Type;
    if (req.body.category !== undefined) transaction.category = req.body.category;
    if (req.body.description !== undefined) transaction.description = req.body.description;

    await user.save();

    return res.status(200).json("Transaction updated");
};


const getBalance = async (req, res) => {
    let balance = 0;
    const username = req.body.userName;
    const user = await User.findOne({ name: username });

    if (!user) {
        return res.status(404).json("User does not exist");
    }

    user.transaction.forEach((element) => {
        if (element.Type === "credit") {
            balance = balance + element.amount;
        } else {
            balance = balance - element.amount;
        }
    });

    res.status(200).json({ balance });
};

export { addTransaction, getUserTransactions, deleteUserTransaction , editTransactions,getBalance};
