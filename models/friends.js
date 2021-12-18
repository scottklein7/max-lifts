// require dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const friendsSchema = new Schema({
    friendUsername: {
        type: String,
        required: true
    },
    friendUserId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Friend', friendsSchema)