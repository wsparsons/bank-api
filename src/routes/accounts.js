// ROUTES
const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/accounts')


//// CRUD METHODS FOR ACCOUNTS
router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.createOne)
router.put('/:id', ctrl.updateOne)
router.delete('/:id', ctrl.removeOne)

//// CRUD METHODS FOR TRANSACTIONS
router.get('/:id/transactions', ctrl.getAllTrans)
// router.get('/:id/transactions/:transId', ctrl.getOneTrans)
// router.post('/:id/transactions', ctrl.createOneTrans)
// router.put('/:id/transactions/:transId', ctrl.updateOneTrans)
// router.delete('/:id/transactions/:transId', ctrl.removeOneTrans)

module.exports = router
