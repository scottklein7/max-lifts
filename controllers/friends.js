const friendsRouter = require('express').Router()
const User = require('../models/user')
const Exercise = require('../models/exercise')
const Friend = require('../models/friends')

//------- Friends Route -------//
// INDUCES

// Friends index
friendsRouter.get('/', (req, res) => {
    User.findById(req.session.user, (err, user) => {
        res.render('friends/friendIndex.ejs', {
            user,
            tabTitle: 'Friends'
        })
    })
})

// new route 
friendsRouter.get('/add/new/friend', (req, res) => {
    User.findById(req.session.user, (err, user) => {
        res.render('friends/newFriend.ejs', {
            user,
            tabTitle: 'New Friend'
        })
    })
})


module.exports = friendsRouter