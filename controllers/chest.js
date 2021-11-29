// require dependencies
const express = require('express')
const { append } = require('express/lib/response')

const chestRouter = express.Router()

// routes 
chestRouter.get('/', (req,res) => {
    res.render('chest/showchest.ejs')
})


module.exports = chestRouter