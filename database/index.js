const mongoose = require('mongoose')
const db = mongoose.connection

const Patron = require('./patron-model').patronModel
const Show = require('./show-model').showModel

db.on('error', console.error)

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/krexet')

db.once('open', () => {
})

module.exports = {
    Show: Show,
    Patron: Patron
}


