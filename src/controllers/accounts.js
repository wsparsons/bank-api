// CONTROLLERS ACCOUNTS
const model = require('../models/accounts')

function getAll(req, res, next){
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({ data })
}

function getOne(req, res, next){
  const acctId = req.params.id
  const result = model.getOne(acctId)
  if(result.errors){
    return next({
      status: 404,
      message: result.errors
    })
  }
  res.status(200).json({ data: result })
}

function createOne(req, res, next){
  const acctBody = req.body
  const result = model.createOne(acctBody)
  if(result.errors) {
    return next({
      status: 400,
      message: result.errors
    })
  }
  res.status(201).json({ data: result })
}

function updateOne(req, res, next){
  const acctId = req.params.id
  const acctBody = req.body

  if(!body){
    return next({
      status: 400,
      message: `Bad Request`
    })
  }

  const result = model.updateOne(acctId, acctBody)

  if(result.errors){
    return next({
      status: 404,
      message: result.errors
    })
  }
  res.status(200).json({ data: result })
}

function removeOne(req, res, next){
  const acctId = req.params.id
  const result = model.removeOne(acctId)
  if(result.errors){
    return next({
      status: 404,
      message: result.errors
    })
  }
  res.status(200).json({ data: result})
}



module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  removeOne
}
