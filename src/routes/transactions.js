// ROUTES
const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrlTrans = require('../controllers/transactions')

//// CRUD METHODS FOR TRANSACTIONS
router.get('/', ctrlTrans.getAllTrans)
router.get('/:transId', ctrlTrans.getOneTrans)
router.post('/', ctrlTrans.createOneTrans)
router.put('/:transId', ctrlTrans.updateOneTrans)
router.delete('/:transId', ctrlTrans.removeOneTrans)

module.exports = router
