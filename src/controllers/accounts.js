// CONTROLLERS ACCOUNTS
const model = require('../models/accounts')

function getAll(req, res, next){
  const limit = req.query.limit
  const data = model.getAll(limit)
  if(!data){
    return next({
      status: 404,
      message: `Cound not find accounts`
    })
  }
  res.status(200).json({ data })
}

function getOne(req, res, next){
  const id = req.params.id
  const data = model.getOne(id)
  if(!data){
    return next({
      status: 404,
      message: `Could not find account with ID of ${id}`
    })
  }
  res.status(200).json({ data })
}

function createOne(req, res, next){
  const { name, bankName, description, transactions } = req.body
  const data = model.createOne(name, bankName, description, transactions)
  if(!name || !bankName || !description){
    return next({
      status: 400,
      message: `Name, bank name and description are required`
    })
  }
  if(!data){
    return next({
      status: 404,
      message: `Could not create new account`
    })
  }
  res.status(201).json({ data })
}

function updateOne(req, res, next){
  const id = req.params.id
  const { name, bankName, description } = req.body
  const data = model.updateOne(id, name, bankName, description)
  if(!name || !bankName || !description){
    return next({
      status: 400,
      message: `Name, bank name and description are required`
    })
  }
  if(data.errors){
    return next({
      status: 404,
      message: data.errors
    })
  }
  res.status(200).json({ data })
}

function removeOne(req, res, next){
  const id = req.params.id
  const data = model.removeOne(id)
  if(data.errors){
    return next({
      status: 404,
      message: data.errors
    })
  }
  res.status(200).json({ data })
}

function getAllTrans(req, res, next){
  const id = req.params.id
  const limit = req.query.limit
  const data = model.getAllTrans(id, limit)
  if(data.errors){
    return next({
      status: 404,
      message: data.errors
    })
  }
  res.status(200).json({ data })
}

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  removeOne,
  getAllTrans
}
