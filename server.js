// require dependencies
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')

const muscleController = require('./controllers/muscle')
const usersController = require('./controllers/users')

// init app settings
const app = express()

// config settings
require('dotenv').config()
const {
    DATABASE_URL,
    PORT,
    SECRET
} = process.env

// connect mongo
mongoose.connect(DATABASE_URL)

// event listeners mongoDB
const db = mongoose.connection
db.on('connected', () => console.log('connected to mongo'))
db.on('error', (err) => console.log('mongo not connected' + err.message))

// mount middleware
app.use(morgan('dev'))
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(express.urlencoded({
    extended: false
}))

app.use(async function(req, res, next) {
    if(req.session && req.session.user) {
        const user = await require('./models/user').findById(req.session.user)
        res.locals.user = user;
    } else {
        res.locals.user = null;
    }
    next();
});

app.use(methodOverride('_method'))
app.use(express.static('public'))

// mount routes
app.use('/', muscleController)
app.use('/', usersController)


// listen for the app
app.listen(PORT, () => console.log(`Express is listening`))