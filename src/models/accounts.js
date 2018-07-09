// MODELS ACCOUNTS
const uuid = require('uuid/v4')
const data = require('./data')

function validateAccountId (id){
  let account = data.find(account => account.id === id)
  return account;
}

function getAll(limit){
  let response = data;
  if(limit){
    response = data.slice(0, limit)
  }
  return response;
}

function getOne(id){
  let response = validateAccountId(id);
  return response;
}

function createOne (name, bankName, description){

  const newAccount = { id: uuid(), name, bankName, description, transactions: []}
  data.push(newAccount)
  return newAccount;
}

function updateOne(id, name, bankName, description){
  const errors = []
  let response;
  const updateAccount = validateAccountId(id)
  if(!updateAccount){
    errors.push(`Could not find account with ID of ${id}`)
    response = { errors }
  } else {
    updateAccount.name = name
    updateAccount.bankName = bankName
    updateAccount.description = description
    response = updateAccount
  }
  return response
}

function removeOne(id){
  const errors = []
  let response;
  const deleteAccount = validateAccountId(id)
  if(!deleteAccount){
    errors.push(`Could not find account with ID of ${id}`)
    response = { errors }
  } else {
    const index = data.indexOf(deleteAccount)
    data.splice(index, 1)
    response = deleteAccount
  }
  return response
}


module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  removeOne
}
