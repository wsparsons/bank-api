// CONTROLLERS TRANSACTIONS
const model = require('../models/transactions')

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

function getOneTrans(req, res, next){
  const id = req.params.id
  const transId = req.params.transId
  const data = model.getOneTrans(id, transId)
  if(data.errors){
    return next({
      status: 404,
      message: data.errors
    })
  }
  res.status(200).json({ data })
}

function createOneTrans(req, res, next){
  const id = req.params.id
  const { title, amount, transPending } = req.body

  if(!title || typeof title !== `string`|| title.length > 8){
    return next({
      status: 400,
      message: `Title is required and has to be a string that cannot be longer than 8 characters`
    })
  }

  if(!amount || typeof amount !== `number`){
    return next({
      status: 400,
      message: `Amount is required and has to be a numeric number`
    })
  }

  if(!transPending || typeof transPending !== `boolean`){
    return next({
      status: 400,
      message: `Transaction status is required and has to be a true/false value`
    })
  }

  const data = model.createOneTrans(id, title, amount, transPending)
  if(data.errors){
    return next({
      status: 404,
      message: data.errors
    })
  }
  res.status(201).json({ data })
}

function updateOneTrans(req, res, next){
  const id = req.params.id
  const transId = req.params.transId

  const { title, amount, transPending } = req.body

  if(!title || typeof title !== `string`|| title.length > 8){
    return next({
      status: 400,
      message: `Title is required and has to be a string that cannot be longer than 8 characters`
    })
  }

  if(!amount || typeof amount !== `number`){
    return next({
      status: 400,
      message: `Amount is required and has to be a numeric number`
    })
  }

  if(!transPending || typeof transPending !== `boolean`){
    return next({
      status: 400,
      message: `Transaction status is required and has to be a true/false value`
    })
  }

  const data = model.updateOneTrans(id, transId, title, amount, transPending)

  if(data.errors){
    return next({
      status: 404,
      message: data.errors
    })
  }
  res.status(201).json({ data })
}

function removeOneTrans(req, res, next){
  const id = req.params.id
  const transId = req.params.transId
  const data = model.removeOneTrans(id, transId)
  if(data.errors){
    return next({
      status: 404,
      message: data.errors
    })
  }
  res.status(200).json({ data })
}

module.exports = {
  getAllTrans,
  getOneTrans,
  createOneTrans,
  updateOneTrans,
  removeOneTrans
}
