const express = require('express');
const route = express.Router();

const {newTransaction, viewAllTransactions, viewTransactionById, updateTransactionById, deleteTransactionById} = require('../controller/controller');


route.post('/',newTransaction);
route.get('/', viewAllTransactions);
route.get('/:id', viewTransactionById);
route.put('/:id', updateTransactionById);
route.delete('/:id', deleteTransactionById);

module.exports = route;

