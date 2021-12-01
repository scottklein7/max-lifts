// require dependencies
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const muscleController = require('./controllers/muscle')

// init app settings
const app = express()

// config settings
require('dotenv').config()
const {
    DATABASE_URL,
    PORT
} = process.env

// connect mongo
mongoose.connect(DATABASE_URL)

// event listeners mongoDB
const db = mongoose.connection
db.on('connected', () => console.log('connected to mongo'))
db.on('error', (err) => console.log('mongo not connected' + err.message))

// mount middleware
app.use(express.urlencoded({
    extended: false
}))
app.use(methodOverride('_method'))
app.use('/', muscleController)

// mount routes

// listen for the app
app.listen(PORT, () => console.log(`Express is listening`))