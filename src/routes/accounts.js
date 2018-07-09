// ROUTES
const express = require('express')
const router = express.Router()
const acctCtrl = require('../controllers/accounts')
const transCtrl = require('../controllers/transactions')


//// CRUD METHODS FOR ACCOUNTS
router.get('/', acctCtrl.getAll)
router.get('/:id', acctCtrl.getOne)
router.post('/', acctCtrl.create)
router.put('/:id', acctCtrl.update)
router.delete('/:id', acctCtrl.remove)

//// CRUD METHODS FOR TRANSACTIONS
// router.get('/:id/transactions', transCtrl.getAll)
// router.get('/:id/transactions/:transactionsId', transCtrl.getOne)
// router.post('/:id/transactions', transCtrl.create)
// router.put('/:id/transactions/:transactionsId', transCtrl.update)
// router.delete('/:id/transactions/:transactionsId', transCtrl.remove)

module.exports = router
