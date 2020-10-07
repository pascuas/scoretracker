const mongoose = require('mongoose');

const FavoriteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    teamName: {
        type: String
    }
})

module.exports = mongoose.model('facorite', FavoriteSchema)