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
            weight: 140,
            notes: "Barbell chest press went until faluire"
        },
        {
            muscleGroup: "Back",
            exercise: "Lat Pull",
            reps: 12,
            weight: 160,
            notes: "Lat pull down went 75% load"
        },
    ]
    await Exercise.create(Data)
    res.redirect('/')
})

// INDUCES

// Index

// Home page index
muscleRouter.get('/', (req, res) => {
    res.render('home.ejs')
})

// chest index
muscleRouter.get('/chest', (req, res) => {
    Exercise.find({
        muscleGroup: "chest"
    }, (err, exercise) => {
        res.render('muscleindex.ejs', {
            Exercise: exercise
        })
    })
})



module.exports = muscleRouter