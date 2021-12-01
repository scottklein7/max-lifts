// require dependencies
const express = require('express')
const Exercise = require('../models/exercise')
const muscleRouter = express.Router()

// routes
muscleRouter.get('/seed', async (req, res) => {
    const Data = [{
            muscleGroup: "Chest",
            exercise: "Bench Press",
            reps: 10,
            duration: 10,
            weight: 140,
            notes: "Barbell chest press went until faluire"
        },
        {
            muscleGroup: "Back",
            exercise: "Lat Pull",
            reps: 12,
            duration: 20,
            weight: 160,
            notes: "Lat pull down went 75% load"
        },
        {
            muscleGroup: "Back",
            exercise: "Lat Pull",
            reps: 12,
            duration: 20,
            weight: 160,
            notes: "Lat pull down went 75% load"
        },
        {
            muscleGroup: "Bicep",
            exercise: "Bicep Curls",
            reps: 4,
            duration: 0,
            weight: 20,
            notes: "Dumbell bicep curls till flauire"
        },
        {
            muscleGroup: "Tricep",
            exercise: "Dip",
            reps: 14,
            duration: 0,
            weight: 0,
            notes: "Did 14 body weight dips"
        },
        {
            muscleGroup: "Leg",
            exercise: "Squat",
            reps: 8,
            duration: 0,
            weight: 225,
            notes: "Sqautted a lot of weight"
        },
        {
            muscleGroup: "Cardio",
            exercise: "Jog",
            reps: 0,
            duration: 30,
            weight: 0,
            notes: "Went on a 30 min jog"
        },
    ]
    await Exercise.create(Data)
    res.redirect('/')
})

muscleRouter.get('/destroy-data', async (req, res) => {
    await Exercise.deleteMany({});
    res.redirect('/');
});

// INDUCES

// Index

// Home page index
muscleRouter.get('/', (req, res) => {
    res.render('home.ejs')
})

// chest index
muscleRouter.get('/chest', (req, res) => {
    Exercise.find({
        muscleGroup: "Chest"
    }, (err, exercise) => {
        res.render('muscleindex.ejs', {
            Exercise: exercise
        })
    })
})

// back index
muscleRouter.get('/back', (req, res) => {
    Exercise.find({
        muscleGroup: "Back"
    }, (err, exercise) => {
        res.render('muscleindex.ejs', {
            Exercise: exercise
        })
    })
})

// bicep index
muscleRouter.get('/bicep', (req, res) => {
    Exercise.find({
        muscleGroup: "Bicep"
    }, (err, exercise) => {
        res.render('muscleindex.ejs', {
            Exercise: exercise
        })
    })
})

// tricep index
muscleRouter.get('/tricep', (req, res) => {
    Exercise.find({
        muscleGroup: "Tricep"
    }, (err, exercise) => {
        res.render('muscleindex.ejs', {
            Exercise: exercise
        })
    })
})

// leg index
muscleRouter.get('/leg', (req, res) => {
    Exercise.find({
        muscleGroup: "Leg"
    }, (err, exercise) => {
        res.render('muscleindex.ejs', {
            Exercise: exercise
        })
    })
})

// cardio index
muscleRouter.get('/cardio', (req, res) => {
    Exercise.find({
        muscleGroup: "Cardio"
    }, (err, exercise) => {
        res.render('muscleindex.ejs', {
            Exercise: exercise
        })
    })
})
// show
muscleRouter.get('/chest/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('muscleshow.ejs', {
            exercise
        })
    })
})


module.exports = muscleRouter