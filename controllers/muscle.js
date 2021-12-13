// require dependencies
const express = require('express')
const User = require('../models/user')
const Exercise = require('../models/exercise')
const exercise = require('../models/exercise')
const muscleRouter = express.Router()

// --------ROUTES-------- //

// --------INDEX-------- //
muscleRouter.get('/:user_id/:exercise', (req, res) => {
    if (!res.locals.user) {
        return res.redirect('/login')
    } else {
        const id = req.session.user
        Exercise.find({
            $and: [{
                    user_id: id
                },
                {
                    muscleGroup: req.params.exercise
                }
            ]
        }, (err, exercise) => {
            res.render('exercises/exerciseIndex.ejs', {
                Exercise: exercise,
                user: id,
                muscle: req.params.exercise,
                tabTitle: `${req.params.exercise}`
            })
        })
    }
})

// --------NEW-------- //
muscleRouter.get('/:user_id/:exercise/new', (req, res) => {
    res.render('exercises/newExercise.ejs', {
        Exercise: req.params.exercise,
        tabTitle: 'New Exercise',
        user: req.session.user
    })
})

//--------DELETE--------//
muscleRouter.delete('/:user_id/:exercise/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, exercise) => {
        res.redirect(`/${req.session.user}/${req.params.exercise}`)
    })
})

// --------UPDATE--------//
muscleRouter.put('/:user_id/:exercise/:id', (req, res) => {
    req.body.completed = !!req.body.completed
    Exercise.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, exercise) => {
        res.redirect(`/${req.session.user}/${exercise.muscleGroup}/${req.params.id}`)
    })
})

// --------CREATE--------//
muscleRouter.post('/', (req, res) => {
    req.body.completed = !!req.body.completed
    Exercise.create(req.body, (err, exercise) => {
        res.redirect(`/${req.session.user}/${req.body.muscleGroup.toLowerCase()}`)
    })
})

// --------EDIT POST EXERCISE--------//
muscleRouter.get('/:user_id/:exercise/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editPostExercise.ejs', {
            exercise,
            tabTitle: 'Edit Chest',
            user: req.session.user
        })
    })
})

// --------EDIT EXERCISE--------//
muscleRouter.get('/:user_id/:exercise/:id/editexercise', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editExercise.ejs', {
            exercise,
            tabTitle: 'Edit Chest Exercise',
            user: req.session.user
        })
    })
})

// --------SHOW--------//
muscleRouter.get('/:user_id/:exercise/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/showExercise.ejs', {
            exercise,
            tabTitle: 'Chest Exercise',
            user: req.session.user
        })
    })
})

module.exports = muscleRouter