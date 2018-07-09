// MODELS TRANSACTIONS
const uuid = require('uuid/v4')
const data = require('./data')

function validateAccountId(id) {
  let account = data.find(account => account.id === id)
  return account;
}

function getAllTrans(id, limit) {
  const errors = []
  let response;
  const account = validateAccountId(id)
  if (!account) {
    errors.push(`Could not find account with ID of ${id}`)
    response = {
      errors
    }
  } else {
    if (limit) {
      response = account.transactions.slice(0, limit)
    } else {
      response = account.transactions
    }
  }
  return response;
}

function getOneTrans(id, transId) {
  const errors = []
  let response;
  const account = validateAccountId(id)
  if (!account) {
    errors.push(`Could not find account with ID of ${id}`)
    response = {
      errors
    }
  } else {
    const transaction = account.transactions.find(trans => trans.transId === transId)
    if (!transaction) {
      errors.push(`Could not find transaction with ID of ${transId}`)
      response = {
        errors
      }
    } else {
      response = transaction
    }
  }
  return response
}

function createOneTrans(id, title, amount, transPending) {
  const errors = []
  let response;
  const account = validateAccountId(id)
  if (!account) {
    errors.push(`Could not find account with ID of ${id}`)
    response = {
      errors
    }
  } else {
    const newTransaction = {
      transId: uuid(),
      title,
      amount,
      transPending
    }
    account.transactions.push(newTransaction)
    response = newTransaction
  }
  return response
}

function updateOneTrans(id, transId, title, amount, transPending) {
  const errors = []
  let response;
  const account = validateAccountId(id)
  if (!account) {
    errors.push(`Could not find account with ID of ${id}`)
    response = {
      errors
    }
  } else {
    const updateTransaction = account.transactions.find(trans => trans.transId === transId)
    if (!updateTransaction) {
      errors.push(`Could not find transaction with ID of ${transId}`)
      response = {
        errors
      }
    } else {
      updateTransaction.title = title
      updateTransaction.amount = amount
      updateTransaction.transPending = transPending
      response = updateTransaction
    }
  }
  return response
}

function removeOneTrans(id, transId) {
  const errors = []
  let response;
  const account = validateAccountId(id)
  if (!account) {
    errors.push(`Could not find account with ID of ${id}`)
    response = {
      errors
    }
  } else {
    const removeTransaction = account.transactions.find(trans => trans.transId === transId)
    // console.log(removeTransaction)
    if (!removeTransaction) {
      errors.push(`Could not find transaction with ID of ${transId}`)
      response = {
        errors
      }
    } else {
      const index = account.transactions.indexOf(removeTransaction)
      account.transactions.splice(index, 1)
      response = removeTransaction
    }
  }
  return response
}

module.exports = {
  getAllTrans,
  getOneTrans,
  createOneTrans,
  updateOneTrans,
  removeOneTrans
}
