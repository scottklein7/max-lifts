// require dependencies
const express = require('express')

// router obj
const indexRouter = express.Router()

// routes 

indexRouter.get('/', (req, res) => {
    res.render('home.ejs')
})



module.exports = indexRouter