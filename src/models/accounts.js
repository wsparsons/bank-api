// MODELS ACCOUNTS
const uuid = require('uuid/v4')
const data = require('./data')

function validateAccountId(id) {
  let result = data.find(account => account.id === id)
  return result;
}

function validateAccountBody(body) {
  const errors = []
  const name = body.name
  const bankName = body.bankName
  const description = body.description

  if (!name || typeof name !== `string`) {
    errors.push(`Name is required and has to be a string of characters`)
  }

  if (!bankName || typeof bankName !== `string`) {
    errors.push(`Bank name is required and has to be a string of characters`)
  }

  if (!description || typeof description !== `string`) {
    errors.push(`Description is required and has to be a string of characters`)
  }
  return errors
}

function getAll(limit) {
  return limit ? data.slice(0, limit) : data
}

function getOne(acctId) {
  const errors = []
  const account = validateAccountId(acctId);
  let response;

  if (!account) {
    errors.push(`Could not find account with ID of ${acctId}`)
    response = {
      errors
    }
    return response
  }
  return account
}


function createOne(acctBody) {
  const errors = []
  const validateAcctBody = validateAccountBody(acctBody)
  const name = acctBody.name
  const bankName = acctBody.bankName
  const description = acctBody.description
  let response;

  if (validateAcctBody.length) {
    errors.push(validateAcctBody)
    response = {
      errors
    }
    return response
  }

  const newAccount = {
    id: uuid(),
    name,
    bankName,
    description,
    transactions: []
  }
  data.push(newAccount)
  return newAccount
}

function updateOne(acctId, acctBody) {
  const errors = []
  const updateAccount = validateAccountId(acctId)
  const validateAcctBody = validateAccountBody(acctBody)
  let response;

  if (!updateAccount) {
    errors.push(`Could not find account with ID of ${id}`)
    response = {
      errors
    }
    return response
  }

  if (validateAcctBody.length) {
    errors.push(validateAcctBody)
    response = {
      errors
    }
    return response
  }

  updateAccount.name = acctBody.name
  updateAccount.bankName = acctBody.bankName
  updateAccount.description = acctBody.description
  return updateAccount
}

function removeOne(acctId) {
  const errors = []
  const deleteAccount = validateAccountId(acctId)
  let response;
  if (!deleteAccount) {
    errors.push(`Could not find account with ID of ${acctId}`)
    response = {
      errors
    }
    return response
  }

  const index = data.indexOf(deleteAccount)
  data.splice(index, 1)
  return deleteAccount
}


module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  removeOne
}
