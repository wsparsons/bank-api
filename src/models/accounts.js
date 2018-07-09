// MODELS ACCOUNTS
const uuid = require('uuid/v4')
const accounts = require('./data')

function getAll(){
  return accounts
}

function getOne(id){
  return accounts.find(account => account.id === id)
}

function create(name, bankName, description){
  const newAccount = { id: uuid(), name, bankName, description}
  accounts.push(newAccount)
  return newAccount
}

function update(id, name, bankName, description){
  const errors = []
  let response;
  const updateAccount = accounts.find(account => account.id === id)
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

function remove(id){
  const errors = []
  let response;
  const deleteAccount = accounts.find(account => account.id === id)
  if(!deleteAccount){
    errors.push(`Could not find account with ID of ${id}`)
    response = { errors }
  } else {
    const index = accounts.indexOf(deleteAccount)
    accounts.splice(index, 1)
    response = deleteAccount
  }
  return response
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
}
