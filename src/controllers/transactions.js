// CONTROLLERS TRANSACTIONS
const model = require('../models/transactions')

function getAllTrans(req, res, next){
  const acctId = req.params.id
  const result = model.getAllTrans(acctId)
  if(result.errors){
    return next({
      status: 404,
      message: result.errors
    })
  }
  res.status(200).json({ data: result })
}

function getOneTrans(req, res, next){
  const acctId = req.params.id
  const transId = req.params.transId
  const result = model.getOneTrans(acctId, transId)
  if(result.errors){
    return next({
      status: 404,
      message: result.errors
    })
  }
  res.status(200).json({ data: result})
}

function createOneTrans(req, res, next){
  const acctId = req.params.id
  const transBody = req.body
  const result = model.createOneTrans(acctId, transBody)
  if(result.errors){
    return next({
      status: 400,
      message: result.errors
    })
  }
  res.status(201).json({ data: result })
}

function updateOneTrans(req, res, next){
  const acctId = req.params.id
  const transId = req.params.transId
  const transBody = req.body
  const result = model.updateOneTrans(acctId, transId, transBody)
  if(result.errors){
    return next({
      status: 404,
      message: result.errors
    })
  }
  res.status(201).json({ data: result })
}

function removeOneTrans(req, res, next){
  const acctId = req.params.id
  const transId = req.params.transId
  const result = model.removeOneTrans(acctId, transId)
  if(result.errors){
    return next({
      status: 404,
      message: result.errors
    })
  }
  res.status(200).json({ data: result })
}

module.exports = {
  getAllTrans,
  getOneTrans,
  createOneTrans,
  updateOneTrans,
  removeOneTrans
}
