const mongoose = require('mongoose')

const transactionDataSchema = new mongoose.Schema({
  type:{type: String, required: true},
  category:{type: String, required: true},
  amount:{type: String, required: true},
  date:{type: String, required: true},
  description:{type: String, required: true}
});

const transactionModel = mongoose.model("transactionDB",transactionDataSchema);

module.exports = transactionModel;