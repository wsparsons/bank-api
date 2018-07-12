const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
if (process.env.NODE_ENV !== 'development') app.use(morgan('dev'))

app.disable('x-powered-by')

//// ROUTE
const accountsRoute = require('./src/routes/accounts')
app.use('/accounts', accountsRoute)

const transactionsRoute = require('./src/routes/transactions')
app.use('/accounts/:id', transactionsRoute)

//// DEFAULT ROUTE
app.use(function(res, req, next) {
  res.status(404).json({ error: { message: 'Not found' }})
})

//// ERROR HANDLING
app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({ error: err })
})

//// STARTING SERVER
const port = process.env.PORT || 5000
const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)

//// MODULE EXPORTS
module.exports = app
