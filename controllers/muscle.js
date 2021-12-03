// require dependencies
const express = require('express')
const exercise = require('../models/exercise')
const Exercise = require('../models/exercise')
const muscleRouter = express.Router()

// routes
muscleRouter.get('/seed', async (req, res) => {
    const Data = [{
            muscleGroup: "Chest",
            exercise: "Bench Press",
            sets: 3,
            reps: 10,
            rpe: 8,
        },
        {
            muscleGroup: "Back",
            exercise: "Lat Pull",
            sets: 3,
            reps: 10,
            rpe: 8,
        },
        {
            muscleGroup: "Back",
            exercise: "Pullups",
            sets: 3,
            reps: 10,
            rpe: 8,
            rest: 2,
            weight: 200,
            notes: "went hard on this one",
            completed: true
        },
        {
            muscleGroup: "Bicep",
            exercise: "Bicep Curl",
            sets: 3,
            reps: 10,
            rpe: 8,
        },
        {
            muscleGroup: "Bicep",
            exercise: "Pull-Up",
            sets: 4,
            reps: 9,
            rpe: 8,
            rest: 2,
            weight: 0,
            notes: "this was hard",
            completed: true
        },
        {
            muscleGroup: "Tricep",
            exercise: "Dips",
            sets: 2,
            reps: 16,
            rpe: 7,
        },
        {
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
            muscleGroup: "Leg",
            exercise: "Sqaut",
            sets: 4,
            reps: 9,
            rpe: 7,
        },
        {
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
    await Exercise.create(Data)
    res.redirect('/')
})

muscleRouter.get('/destroy-data', async (req, res) => {
    await Exercise.deleteMany({});
    res.redirect('/');
});

// INDUCES

// --------INDEX-------- //

// Home page index
muscleRouter.get('/', (req, res) => {
    res.render('home.ejs')
})

// chest index
muscleRouter.get('/chest', (req, res) => {
    Exercise.find({
        muscleGroup: 'Chest'
    }, (err, exercise) => {
        res.render('index.ejs', {
            Exercise: exercise
        })
    })
})

// back index
muscleRouter.get('/back', (req, res) => {
    Exercise.find({
        muscleGroup: "Back"
    }, (err, exercise) => {
        res.render('index.ejs', {
            Exercise: exercise
        })
    })
})

// bicep index
muscleRouter.get('/bicep', (req, res) => {
    Exercise.find({
        muscleGroup: "Bicep"
    }, (err, exercise) => {
        res.render('index.ejs', {
            Exercise: exercise
        })
    })
})

// tricep index
muscleRouter.get('/tricep', (req, res) => {
    Exercise.find({
        muscleGroup: "Tricep"
    }, (err, exercise) => {
        res.render('index.ejs', {
            Exercise: exercise
        })
    })
})

// leg index
muscleRouter.get('/leg', (req, res) => {
    Exercise.find({
        muscleGroup: "Leg"
    }, (err, exercise) => {
        res.render('index.ejs', {
            Exercise: exercise
        })
    })
})

// cardio index
muscleRouter.get('/cardio', (req, res) => {
    Exercise.find({
        muscleGroup: "Cardio"
    }, (err, exercise) => {
        res.render('index.ejs', {
            Exercise: exercise
        })
    })
})

// --------NEW-------- //
// new chest
muscleRouter.get('/chest/new', (req, res) => {
    res.render('exerciseNew.ejs')
})

// new back
muscleRouter.get('/back/new', (req, res) => {
    res.render('exerciseNew.ejs')
})

// new bicep
muscleRouter.get('/bicep/new', (req, res) => {
    res.render('exerciseNew.ejs')
})

// new back
muscleRouter.get('/tricep/new', (req, res) => {
    res.render('exerciseNew.ejs')
})

// nre leg
muscleRouter.get('/leg/new', (req, res) => {
    res.render('exerciseNew.ejs')
})

// new cardio
muscleRouter.get('/cardio/new', (req, res) => {
    res.render('exerciseNew.ejs')
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
// --------CREATE--------//

// new chest 
muscleRouter.post('/', (req, res) => {
    Exercise.create(req.body, (err, exercise) => {
        res.redirect(`/${exercise.muscleGroup}`)
    })
})

// --------EDIT--------//

// edit chest
muscleRouter.get('/chest/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('edit.ejs', {
            exercise
        })
    })
})

// edit back
muscleRouter.get('/back/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('edit.ejs', {
            exercise
        })
    })
})

// edit bicep
muscleRouter.get('/bicep/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('edit.ejs', {
            exercise
        })
    })
})

// edit tricep
muscleRouter.get('/tricep/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('edit.ejs', {
            exercise
        })
    })
})

// edit leg
muscleRouter.get('/leg/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('edit.ejs', {
            exercise
        })
    })
})

// --------SHOW--------//

// show chest
muscleRouter.get('/chest/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('muscleshow.ejs', {
            exercise
        })
    })
})

// Show back
muscleRouter.get('/back/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('muscleshow.ejs', {
            exercise
        })
    })
})

// Show bicep
muscleRouter.get('/bicep/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('muscleshow.ejs', {
            exercise
        })
    })
})

// Show tricep
muscleRouter.get('/tricep/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('muscleshow.ejs', {
            exercise
        })
    })
})

// Show legs
muscleRouter.get('/leg/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('muscleshow.ejs', {
            exercise
        })
    })
})

// Show cardio
muscleRouter.get('/cardio/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('muscleshow.ejs', {
            exercise
        })
    })
})


module.exports = muscleRouter