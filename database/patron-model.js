const mongoose = require('mongoose')

module.exports.patronSchema = new mongoose.Schema({
    name: {type: String},
    email: String,
    hasPayed: Boolean
})

module.exports.patronModel = mongoose.model('Patron', module.exports.patronSchema)

