const friendsRouter = require('express').Router()
const User = require('../models/user')
const Exercise = require('../models/exercise')
const Friend = require('../models/friends')

//------- Friends Route -------//
// INDUCES

// Friends index
friendsRouter.get('/', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login')
    } else {
        User.findById(req.session.user, (err, user) => {
            res.render('friends/friendIndex.ejs', {
                user,
                tabTitle: 'Friends'
            })
        })
    }
})

// new route 
friendsRouter.get('/add/new/user', (req, res) => {
    User.findById(req.session.user, (err, user) => {
        res.render('friends/newFriend.ejs', {
            user,
            tabTitle: 'New Friend'
        })
    })
})

// post new friend
friendsRouter.post('/friends', async (req, res) => {
    //find by ID and then if found in array create a user else not found 
     //look for the searched user in our users model by their username
     //creat and instance of a friend
    const friend = User.find({friendUsername: req.body.friendUsername})
    User.create(req.body, (err, friend) => {
        res.redirect('/friends')
    })
})

module.exports = friendsRouter