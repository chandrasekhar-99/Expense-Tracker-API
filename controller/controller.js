

const transactionDataCall = require('../models/transaction')


const newTransaction = async (req, res) => {
  try{
    const {type,category,amount,date,description} = req.body;
    const newTransactionRecord = new transactionDataCall ({
      type,category,amount,date,description
    });
    const newTransactionPost = newTransactionRecord.save();

    res.json(newTransactionPost);

  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

const viewAllTransactions = async (req,res) => {
  try{
    const viewData = await transactionDataCall.find();
    res.json(viewData)
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

const viewTransactionById = async(req,res) => {
  try{
    const viewById = await transactionDataCall.findById(req.params.id);
   
    if (!viewById) {
      return res.status(400).json({message: "Transaction not found"})
    } 

    res.json(viewById);
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

const updateTransactionById = async(req,res) => {
  try{
    const {type,category,amount,date,description} = req.body;
    const updateById = await transactionDataCall.findByIdAndUpdate(req.params.id,{type,category,amount,date,description},{new : true});
   
    if (!updateById) {
      return res.status(400).json({message: "Transaction not found"})
    } 

    res.json(updateById);
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

const deleteTransactionById = async(req,res) => {
  try{
    
    const deleteById = await transactionDataCall.findByIdAndDelete(req.params.id);
   
    if (!deleteById) {
      return res.status(400).json({message: "Transaction not found"})
    } 

    res.json(deleteById);
  }catch(error){
    res.status(500).json({message: error.message})
  }
}





module.exports ={newTransaction, viewAllTransactions, viewTransactionById, updateTransactionById, deleteTransactionById};