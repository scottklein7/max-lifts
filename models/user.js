// Require Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    friendUserId: {
        type: Schema.Types.ObjectId,
        ref: 'Friend',
        required: false
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)