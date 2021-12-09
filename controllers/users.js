// Require dependencies
const userRouter = require('express').Router()
const User = require('../models/user')
const Exercise = require('../models/exercise')

const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

// seed

// routes
userRouter.get('/', (req, res) => {
    res.render('landing.ejs', {
        tabTitle: 'Welcome'
    })
})

userRouter.get('/login', (req, res) => {
    res.render('login.ejs', {
        err: '',
        tabTitle: 'Login'
    });
});

userRouter.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username
    }, '+password', (err, user) => {
        if (!user) return res.render('login.ejs', {
            err: 'invaild creds'
        })
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.render('login.ejs', {
                err: 'invalid creds'
            });
        }
        req.session.user = user.id
        res.redirect('/home')
    })
})

userRouter.get('/signup', (req, res) => {
    res.render('signup.ejs', {
        tabTitle: 'Signup'
    })
})

userRouter.post('/signup', (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUNDS))
    req.body.password = hash
    User.create(req.body, (error, user) => {
        req.session.user = user.id
        res.redirect('/home')
    })
})

userRouter.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/landing')
    })
})

userRouter.get('/home', (req, res) => {
    if (!req.session.user) return res.redirect('/login')
    User.findById(req.session.user, (err, user) => {
        res.render('homeindex.ejs', {
            user,
        })
    })
})

module.exports = userRouter