// require dependencies
const express = require('express')
const User = require('../models/user')
const Exercise = require('../models/exercise')
const exercise = require('../models/exercise')
const muscleRouter = express.Router()

// routes

// seed
muscleRouter.get('/seed', async (req, res) => {
    const Data = [

        {
            user_id: "61b2b31c72d296f0a573e682",
            muscleGroup: "Chest",
            exercise: "FIRST ONE",
            sets: 3,
            reps: 10,
            rpe: 8,
            rest: 2,
            weight: 200,
            notes: "went hard on this one",
            completed: true
        },

        {
            user_id: "61b2b31c72d296f0a573e682",
            muscleGroup: "chest",
            exercise: "SECOND ONE",
            sets: 4,
            reps: 9,
            rpe: 8,
            rest: 2,
            weight: 0,
            notes: "this was hard",
            completed: true
        },

        {
            user_id: "61b2b378218835f2f6529fec",
            muscleGroup: "Tricep",
            exercise: "Dips",
            sets: 2,
            reps: 16,
            rpe: 7,
            rest: 2,
            weight: 0,
            notes: "Almost failed",
            completed: true
        },
        {
            user_id: "61b2b378218835f2f6529fec",
            muscleGroup: "Leg",
            exercise: "Sqaut",
            sets: 4,
            reps: 9,
            rpe: 7,
            rest: 3,
            weight: 250,
            notes: "almost hurt my back",
            completed: true
        },
    ]
    await Exercise.deleteMany({});
    await Exercise.create(Data);
    res.redirect('/')
})


// INDUCES

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
                tabTitle: `${req.params.exercise}`
            })
        })
    }
})

// --------NEW-------- //
muscleRouter.get('/:user_id/:exercise/new', (req, res) => {
    console.log(req.session.user, 'is the user!!!!!!!!!')
    console.log(req.params.exercise)
    res.render('exercises/newExercise.ejs', {
        Exercise: req.params.exercise,
        tabTitle: 'New Exercise',
        user: req.session.user
    })
})

// // --------DELETE--------//
muscleRouter.delete('/:user_id/:exercise/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, exercise) => {
        res.redirect(`/${req.session.user}/${req.params.exercise}`)
    })
})

// // --------UPDATE--------//
muscleRouter.put('/:user_id/:exercise/:id', (req, res) => {
    req.body.completed = !!req.body.completed
    Exercise.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, exercise) => {
        res.redirect(`/${exercise.muscleGroup}/${req.params.id}`)
    })
})

// // --------CREATE--------//
muscleRouter.post('/', (req, res) => {
    console.log(req.body.muscleGroup.toLowerCase(), 'FROM POST NEW CHEST')
    console.log(req.session.user)
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
            tabTitle: 'Edit Chest'
        })
    })
})

// --------EDIT EXERCISE--------//
muscleRouter.get('/:user_id/:exercise/:id/editexercise', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editExercise.ejs', {
            exercise,
            tabTitle: 'Edit Chest Exercise'
        })
    })
})

// // --------SHOW--------//
muscleRouter.get('/:user_id/:exercise/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/showExercise.ejs', {
            exercise,
            tabTitle: 'Chest Exercise'
        })
    })
})

module.exports = muscleRouter