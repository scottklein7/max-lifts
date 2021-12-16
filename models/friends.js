// require dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const friends = new Schema ({
    username: {
        type: String,
        required: true
    },
    friendUserId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Friends', friendsSchema)