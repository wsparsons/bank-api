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
  if(!name || typeof name !== `string`){
    return next({
      status: 400,
      message: `Name is required and has to be a string of characters`
    })
  }

  if(!bankName || typeof bankName !== `string`){
    return next({
      status: 400,
      message: `Bank name is required and has to be a string of characters`
    })
  }

  if(!description || typeof description !== `string`){
    return next({
      status: 400,
      message: `Bank name is required and has to be a string of characters`
    })
  }

  const data = model.createOne(name, bankName, description, transactions)
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

  if(!name || typeof name !== `string`){
    return next({
      status: 400,
      message: `Name is required and has to be a string of characters`
    })
  }

  if(!bankName || typeof bankName !== `string`){
    return next({
      status: 400,
      message: `Bank name is required and has to be a string of characters`
    })
  }

  if(!description || typeof description !== `string`){
    return next({
      status: 400,
      message: `Bank name is required and has to be a string of characters`
    })
  }

  const data = model.updateOne(id, name, bankName, description)
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



module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  removeOne
}
