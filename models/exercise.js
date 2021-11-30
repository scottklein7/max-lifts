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
    reps: {
        type: Number,
        required: true,
        default: 0
    },
    notes: {
        type: String,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Exercise', exerciseSchema)