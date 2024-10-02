const express = require('express')
const authentication = require('../middlewares/authentication')

const CustomerController = require('../controllers/customerController')

const customers = express()

customers.get("/", CustomerController.getAllCustomer)
customers.put("/:id", CustomerController.updateCustomerById)


customers.get("/:id", CustomerController.getCustomerById)



module.exports = customers