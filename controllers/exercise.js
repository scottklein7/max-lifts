// require dependencies
const express = require('express')

// router obj
const exerciseRouter = express.Router()

// routes 

exerciseRouter.get('/', (req, res) => {
    res.render('home.ejs')
})



module.exports = exerciseRouter