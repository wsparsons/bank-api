// CONTROLLERS ACCOUNTS
const model = require('../models/accounts')

function getAll(req, res, next){
  const data = model.getAll()
  res.status(200).json({ data })
}

function getOne(req, res, next){
  const id = req.params.id
}
