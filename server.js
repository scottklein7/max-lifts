// require dependencies
const express = require('express')
const mongoose = require('mongoose')
const exerciseController = require('./controllers/exercise')
// init app settings
const app = express()

// config settings
require('dotenv').config()
const { DATABASE_URL, PORT} = process.env

// connect mongo
mongoose.connect(DATABASE_URL)

// event listeners mongoDB
const db = mongoose.connection
db.on('connected', () => console.log('connected to mongo'))
db.on('error', (err) => console.log('mongo not connected' + err.message))

// mount middleware
app.use('/exercises', exerciseController)

// mount routes

// listen for the app
app.listen(PORT, () => console.log(`Express is listening`))



