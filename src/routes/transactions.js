// ROUTES
const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrlAccts = require('../controllers/accounts')
const ctrlTrans = require('../controllers/transactions')

//// CRUD METHODS FOR TRANSACTIONS
router.get('/transactions', ctrlTrans.getAllTrans)
router.get('/transactions/:transId', ctrlTrans.getOneTrans)
router.post('/transactions', ctrlTrans.createOneTrans)
router.put('/transactions/:transId', ctrlTrans.updateOneTrans)
router.delete('/transactions/:transId', ctrlTrans.removeOneTrans)

module.exports = router
