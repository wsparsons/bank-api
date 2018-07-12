// MODELS TRANSACTIONS
const uuid = require('uuid/v4')
const data = require('./data')

function validateAccountId(id) {
  let account = data.find(account => account.id === id)
  return account;
}

function validateTransactionBody(body) {
  const errors = []
  const title = body.title
  const amount = body.amount
  const transPending = body.transPending

  if (!title || typeof title !== `string` || title.length > 8) {
    errors.push(`Title is required and has to be a string that cannot be longer than 8 characters`)
  }

  if (!amount || typeof amount !== `number`) {
    errors.push(`Amount is required and has to be a numeric number`)
  }

  if (!transPending || typeof transPending !== `boolean`) {
    errors.push(`Transaction status is required and has to be a true/false value`)
  }

  return errors
}

function getAllTrans(acctId) {
  const errors = []
  const account = validateAccountId(acctId)
  let response;
  if (!account) {
    errors.push(`Could not find account with ID of ${acctId}`)
    response = {
      errors
    }
    return response
  }
  return account.transactions
}

function getOneTrans(acctId, transId) {
  const errors = []
  const account = validateAccountId(acctId)
  let response;

  if (!account) {
    errors.push(`Could not find account with ID of ${acctId}`)
    response = {
      errors
    }
    return response
  }

  const transaction = account.transactions.find(trans => trans.transId === transId)

  if (!transaction) {
    errors.push(`Could not find transaction with ID of ${transId}`)
    response = {
      errors
    }
    return response
  }

  return transaction
}

function createOneTrans(acctId, transBody) {
  const errors = []
  const account = validateAccountId(acctId)
  const validateTransBody = validateTransactionBody(transBody)
  const title = transBody.title
  const amount = transBody.amount
  const transPending = transBody.transPending
  let response;

  if (!account) {
    errors.push(`Could not find account with ID of ${acctId}`)
    response = {
      errors
    }
    return response
  }

  if (validateTransBody.length) {
    errors.push(validateTransBody)
    response = {
      errors
    }
    return response
  }

  const newTransaction = {
    transId: uuid(),
    title,
    amount,
    transPending
  }
  account.transactions.push(newTransaction)
  return newTransaction
}

function updateOneTrans(acctId, transId, transBody) {
  const errors = [];
  const account = validateAccountId(acctId)
  const validateTransBody = validateTransactionBody(transBody)
  const title = transBody.title
  const amount = transBody.amount
  const transPending = transBody.transPending
  let response;

  if (!account) {
    errors.push(`Could not find account with ID of ${acctId}`)
    response = {
      errors
    }
    return response
  }

  if (validateTransBody.length) {
    errors = validateTransBody
    response = {
      errors
    }
    return response
  }

  const updateTransaction = account.transactions.find(trans => trans.transId === transId)

  if (!updateTransaction) {
    errors.push(`Could not find transaction with ID of ${transId}`)
    response = {
      errors
    }
    return response
  }

  updateTransaction.title = title
  updateTransaction.amount = amount
  updateTransaction.transPending = transPending
  return updateTransaction
}

function removeOneTrans(acctId, transId) {
  const errors = []
  let response;
  const account = validateAccountId(acctId)

  if (!account) {
    errors.push(`Could not find account with ID of ${acctId}`)
    response = {
      errors
    }
    return response
  }

  const removeTransaction = account.transactions.find(trans => trans.transId === transId)

  if (!removeTransaction) {
    errors.push(`Could not find transaction with ID of ${transId}`)
    response = {
      errors
    }
    return response
  }

  const index = account.transactions.indexOf(removeTransaction)
  account.transactions.splice(index, 1)
  return removeTransaction
}

module.exports = {
  getAllTrans,
  getOneTrans,
  createOneTrans,
  updateOneTrans,
  removeOneTrans
}
