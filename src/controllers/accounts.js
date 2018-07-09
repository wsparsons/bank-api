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
  res.status(200).json({ data })
}

function create(req, res, next){
  const { name, bankName, description } = req.body
  const data = model.create(name, bankName, description)
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

function update(req, res, next){
  const id = req.params.id
  const { name, bankName, description } = req.body
  const data = model.update(id, name, bankName, description)
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

function remove(req, res, next){
  const id = req.params.id
  const data = model.remove(id)
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
  create,
  update,
  remove
}
