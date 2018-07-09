// CONTROLLERS ACCOUNTS
const model = require('../models/accounts')

function getAll(req, res, next){
  const data = model.getAll()
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
}

function create(req, res, next){
  const { name, bankName, description } = req.body
  if(!name || !bankName || !description){
    return next({
      status: 400,
      message: `Name, bank name and description are required`
    })
  }
  const data = model.create(name, bankName, description)
  if(!data){
    return next({
      status: 404,
      message: `Could not create new account`
    })
  }
  res.status(201).json({ data })
}

function update(req, res, next){
  const id = req.params.id
  const { name, bankName, description } = req.body
  if(!name || !bankName || !description){
    return next({
      status: 400,
      message: `Name, bank name and description are required`
    })
  }
  const data = model.update(id, name, bankName, description)
  if(!data){
    return next({
      status: 404,
      message: `Could not update due to wrong account ID of ${id}`
    })
  }
  res.status(200).json({ data })
}

function remove(req, res, next){
  const id = req.params.id
  const data = model.remove(id)
  if(!data){
    return next({
      status: 404,
      message: `Could not delete due to wrong account ID of ${id}`
    })
  }
  res.status(200).json({ data })
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
}
