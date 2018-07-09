// ROUTES
const express = require('express')
const router = express.Router()
const ctrlAccts = require('../controllers/accounts')
const ctrlTrans = require('../controllers/transactions')


//// CRUD METHODS FOR ACCOUNTS
router.get('/', ctrlAccts.getAll)
router.get('/:id', ctrlAccts.getOne)
router.post('/', ctrlAccts.createOne)
router.put('/:id', ctrlAccts.updateOne)
router.delete('/:id', ctrlAccts.removeOne)

//// CRUD METHODS FOR TRANSACTIONS
router.get('/:id/transactions', ctrlTrans.getAllTrans)
router.get('/:id/transactions/:transId', ctrlTrans.getOneTrans)
router.post('/:id/transactions', ctrlTrans.createOneTrans)
router.put('/:id/transactions/:transId', ctrlTrans.updateOneTrans)
router.delete('/:id/transactions/:transId', ctrlTrans.removeOneTrans)

module.exports = router
