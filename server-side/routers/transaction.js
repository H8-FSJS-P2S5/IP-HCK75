const express = require('express')
const TransactionController = require('../controllers/transactionController')


const transactions = express.Router()

transactions.get("/", TransactionController.getTransactionByCustomerId)
transactions.post("/", TransactionController.postNewTransaction)
transactions.put("/:id", TransactionController.updateStatus)
transactions.delete("/:id", TransactionController.deleteTransaction)
// transactions.get("/:CustomerId", TransactionController.getTransactionByCustomerId)
transactions.get("/:CustomerId/:id", TransactionController.getTransactionByCustomerIdAndId)

module.exports = transactions