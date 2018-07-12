// ROUTES
const express = require('express')
const router = express.Router()
const ctrlAccts = require('../controllers/accounts')

//// CRUD METHODS FOR ACCOUNTS
router.get('/', ctrlAccts.getAll)
router.get('/:id', ctrlAccts.getOne)
router.post('/', ctrlAccts.createOne)
router.put('/:id', ctrlAccts.updateOne)
router.delete('/:id', ctrlAccts.removeOne)

module.exports = router
