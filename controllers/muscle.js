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


muscleRouter.get('/chest', (req, res) => {
    Exercise.find({user_id: req.session.user}, (err, exercise) => {
        res.render('exercises/exerciseIndex.ejs', {
            Exercise: exercise,
            user: req.session.user,
            tabTitle: req.params.user
        })
    })
})


// back index
muscleRouter.get('/back', (req, res) => {
    Exercise.find({
        muscleGroup: "Back"
    }, (err, exercise) => {
        res.render('exercises/exerciseIndex.ejs', {
            Exercise: exercise,
            tabTitle: 'Back'
        })
    })
})

// bicep index
muscleRouter.get('/bicep', (req, res) => {
    Exercise.find({
        muscleGroup: "Bicep"
    }, (err, exercise) => {
        res.render('exercises/exerciseIndex.ejs', {
            Exercise: exercise,
            tabTitle: 'Bicep'
        })
    })
})

// tricep index
muscleRouter.get('/tricep', (req, res) => {
    Exercise.find({
        muscleGroup: "Tricep"
    }, (err, exercise) => {
        res.render('exercises/exerciseIndex.ejs', {
            Exercise: exercise,
            tabTitle: 'Tricep'
        })
    })
})

// leg index
muscleRouter.get('/leg', (req, res) => {
    Exercise.find({
        muscleGroup: "Leg"
    }, (err, exercise) => {
        res.render('exercises/exerciseIndex.ejs', {
            Exercise: exercise,
            tabTitle: 'Leg'
        })
    })
})

// cardio index
muscleRouter.get('/cardio', (req, res) => {
    Exercise.find({
        muscleGroup: "Cardio"
    }, (err, exercise) => {
        res.render('exercises/exerciseIndex.ejs', {
            Exercise: exercise
        })
    })
})

// --------NEW-------- //
// new chest
muscleRouter.get('/chest/new', (req, res) => {
    console.log(req.session.user, 'is the user!!!!!!!!!')
    res.render('exercises/newExercise.ejs', {
        Exercise,
        tabTitle: 'New Exercise',
        user: req.session.user
    })
})

// new back
muscleRouter.get('/back/new', (req, res) => {
    res.render('exercises/newExercise.ejs', {
        Exercise,
        tabTitle: 'New Exercise',
        user: req.session.user
    })
})

// new bicep
muscleRouter.get('/bicep/new', (req, res) => {
    res.render('exercises/newExercise.ejs', {
        Exercise,
        tabTitle: 'New Exercise',
        user: req.session.user
    })
})

// new back
muscleRouter.get('/tricep/new', (req, res) => {
    res.render('exercises/newExercise.ejs', {
        Exercise,
        tabTitle: 'New Exercise',
        user: req.session.user
    })
})

// nre leg
muscleRouter.get('/leg/new', (req, res) => {
    res.render('exercises/newExercise.ejs', {
        Exercise,
        tabTitle: 'New Exercise',
        user: req.session.user
    })
})

// new cardio
muscleRouter.get('/cardio/new', (req, res) => {
    res.render('exercises/newExercise.ejs', {
        Exercise,
        tabTitle: 'New Exercise',
        user: req.session.user
    })
})

// --------DELETE--------//

// delete chest
muscleRouter.delete('/chest/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, exercise) => {
        res.redirect('/chest')
    })
})

// delete back
muscleRouter.delete('/back/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, exercise) => {
        res.redirect('/back')
    })
})

// delete bicep
muscleRouter.delete('/bicep/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, exercise) => {
        res.redirect('/bicep')
    })
})

// delete tricep
muscleRouter.delete('/tricep/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, exercise) => {
        res.redirect('/tricep')
    })
})

// delete leg
muscleRouter.delete('/leg/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, exercise) => {
        res.redirect('/leg')
    })
})

// --------UPDATE--------//

// update chest
muscleRouter.put('/chest/:id', (req, res) => {
    req.body.completed = !!req.body.completed
    Exercise.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, exercise) => {
        res.redirect(`/${exercise.muscleGroup}/${req.params.id}`)
    })
})

// update back 
muscleRouter.put('/back/:id', (req, res) => {
    req.body.completed = !!req.body.completed
    Exercise.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, exercise) => {
        res.redirect(`/${exercise.muscleGroup}/${req.params.id}`)
    })
})

// update bicep
muscleRouter.put('/bicep/:id', (req, res) => {
    req.body.completed = !!req.body.completed
    Exercise.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, exercise) => {
        res.redirect(`/${exercise.muscleGroup}/${req.params.id}`)
    })
})

// update tricep
muscleRouter.put('/tricep/:id', (req, res) => {
    req.body.completed = !!req.body.completed
    Exercise.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, exercise) => {
        res.redirect(`/${exercise.muscleGroup}/${req.params.id}`)
    })
})

// update leg
muscleRouter.put('/leg/:id', (req, res) => {
    req.body.completed = !!req.body.completed
    Exercise.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, exercise) => {
        res.redirect(`/${exercise.muscleGroup}/${req.params.id}`)
    })
})
// --------CREATE--------//

// new chest 
muscleRouter.post('/', (req, res) => {
    console.log(req.body.muscleGroup.toLowerCase(), 'FROM POST NEW CHEST')
    req.body.completed = !!req.body.completed
    Exercise.create(req.body, (err, exercise) => {
        res.redirect(`/${req.body.muscleGroup.toLowerCase()}`)
    })
})

// --------EDIT POST EXERCISE--------//

// edit post chest
muscleRouter.get('/chest/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editPostExercise.ejs', {
            exercise,
            tabTitle: 'Edit Chest'
        })
    })
})


// edit post back
muscleRouter.get('/back/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editPostExercise.ejs', {
            exercise,
            tabTitle: 'Edit Back'
        })
    })
})

// edit post bicep
muscleRouter.get('/bicep/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editPostExercise.ejs', {
            exercise,
            tabTitle: 'Edit Bicep'
        })
    })
})

// edit post tricep
muscleRouter.get('/tricep/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editPostExercise.ejs', {
            exercise,
            tabTitle: 'Edit Tricep'
        })
    })
})

// edit post leg
muscleRouter.get('/leg/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editPostExercise.ejs', {
            exercise,
            tabTitle: 'Edit Leg'
        })
    })
})

// --------EDIT EXERCISE--------//
// edit chest 
muscleRouter.get('/chest/:id/editexercise', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editExercise.ejs', {
            exercise,
            tabTitle: 'Edit Chest Exercise'
        })
    })
})

// edit back
muscleRouter.get('/back/:id/editexercise', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editExercise.ejs', {
            exercise,
            tabTitle: 'Edit Back Exercise'
        })
    })
})

// edit bicep
muscleRouter.get('/bicep/:id/editexercise', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editExercise.ejs', {
            exercise,
            tabTitle: 'Edit Bicep Exercise'
        })
    })
})

// edit tricep
muscleRouter.get('/tricep/:id/editexercise', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editExercise.ejs', {
            exercise,
            tabTitle: 'Edit Tricep Exercise'
        })
    })
})

// edit leg
muscleRouter.get('/leg/:id/editexercise', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/editExercise.ejs', {
            exercise,
            tabTitle: 'Edit Leg Exercise'
        })
    })
})

// --------SHOW--------//

// show chest
muscleRouter.get('/chest/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/showExercise.ejs', {
            exercise,
            tabTitle: 'Chest Exercise'
        })
    })
})

// Show back
muscleRouter.get('/back/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/showExercise.ejs', {
            exercise,
            tabTitle: 'Back Exercise'
        })
    })
})

// Show bicep
muscleRouter.get('/bicep/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/showExercise.ejs', {
            exercise,
            tabTitle: 'Bicep Exercise'
        })
    })
})

// Show tricep
muscleRouter.get('/tricep/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/showExercise.ejs', {
            exercise,
            tabTitle: 'Tricep Exercise'
        })
    })
})

// Show legs
muscleRouter.get('/leg/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/showExercise.ejs', {
            exercise,
            tabTitle: 'Leg Exercise'
        })
    })
})

// Show cardio
muscleRouter.get('/cardio/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/showExercise.ejs', {
            exercise
        })
    })
})


module.exports = muscleRouter