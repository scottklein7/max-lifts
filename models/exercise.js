// require dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// define schemas
const exerciseSchema = new Schema({
    muscleGroup: {
        type: String,
        required: true
    },
    exercise: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true
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
}, {timestamps: true})

module.exports = mongoose.model('Exercise', exerciseSchema) 