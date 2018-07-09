// MODELS ACCOUNTS
const uuid = require('uuid/v4')
const accounts = require('./data')

function getAll(){
  return accounts
}

function getOne(){
  return accounts.find(account => account.id === id)
}

function create(name, bankName, description){
  const account = { id: uuid(), name, bankName, description}
  accounts.push(account)
  return account
}

function update(id, name, bankName, description){
  const account = accounts.find(account => account.id === id)
  account.name = name
  account.bankName = bankName
  account.description = description
  return account
}

function remove(id){
  const account = accounts.find(account => account.id === id)
  const index = accounts.indexOf(account)
  accounts.splice(index, 1)
  return account
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
}
