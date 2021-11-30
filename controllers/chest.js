// require dependencies
const express = require('express')
const Exercise = require('../models/exercise')
const chestRouter = express.Router()

// routes
chestRouter.get('/seed', async (req, res) => {
    const chestData = [{
        muscleGroup: "chest",
        exercise: "Bench Press",
        reps: 10,
        weight: 140,
        notes: "Barbell chest press went until faluire"
    }]
    await Exercise.create(chestData)
    res.redirect('/chest')
})


chestRouter.get('/', (req, res) => {
    Exercise.find({muscleGroup: "chest"}, (err, chestExercise) => {
        res.render('chest/showchest.ejs', {
            chestExercise
        })
    })
})


module.exports = chestRouter