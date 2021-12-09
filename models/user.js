// Require Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: {
        type: String,
        select: false
    }
})

module.exports = mongoose.model('User', userSchema)