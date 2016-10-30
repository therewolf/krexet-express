const mongoose = require('mongoose');

const db = mongoose.connection;

db.on('error', console.error);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/krexet');

db.once('open', () => {
});

let showSchema = new mongoose.Schema({
    date: String,
    price: Number,
    seats: Number,
    patrons: []
});

let patronSchema = new mongoose.Schema({
    name: {type: String},
    email: String,
    hasPayed: Boolean
});
const Show = mongoose.model('Show', showSchema);
const Patron = mongoose.model('Patron', patronSchema);

module.exports = {
    Show: Show,
    Patron: Patron
}


