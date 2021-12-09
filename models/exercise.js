// require dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// define schemas
const exerciseSchema = new Schema({
    username: String,
    password: {
        type: String,
        select: false
    },
    muscleGroup: {
        type: String,
        required: false
    },
    exercise: {
        type: String,
        required: false
    },
    sets: {
        type: Number,
        required: false
    },
    reps: {
        type: Number,
        required: false,
        default: 0
    },
    rpe: {
        type: Number,
        required: false,
        default: 0
    },
    rest: {
        type: Number,
        required: false,
        default: 1
    },
    weight: {
        type: Number,
        required: false,
        default: 0
    },
    notes: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Exercise', exerciseSchema)