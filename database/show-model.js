const mongoose = require('mongoose')

module.exports.showSchema = new mongoose.Schema({
    date: String,
    price: Number,
    seats: Number,
    patrons: []
})

module.exports.showModel = mongoose.model('Show', module.exports.showSchema)

