const express = require('express')
const router = express.Router()

const db = require('database')
const Show = db.Show
const Patron = db.Patron

router.post('/api/createShow', (req, res) => {
    var newShow = new Show(req.body)
    console.log(req.body)
    newShow.save((err) => {
        if (err) return console.error(err)
    })
    res.send('New show created')
})

// Get routes
router.get('/openapi/getShows', (req, res) => {
    Show.find((err, shows) => {
        if (err) return console.error(err)
        res.send(shows)
    })
})

router.put('/api/updateShow', (req, res) => {
    var newShow = req.body
    var query = { "_id" : newShow._id }
    var options = {}
    var update = { date  : newShow.date,
                   price : newShow.price,
                   seats : newShow.seats
                   }
    Show.findOneAndUpdate(query, update, options, (err, show) => {
        if (err) { console.log(error) }
    })
    res.send('show changed')
})

// Delete routes
router.delete('/api/deleteShow/:showId', (req, res) => {
    console.log(req.params.showId)
    Show.remove({"_id" : req.params.showId }, () => {
        res.send('deleting show')
    })
})

router.delete('/api/deleteAllShows', (req, res) => {
    Show.remove({}, (err) => {
        if (err) return console.log(err)
    })
    res.send('Deleting all shows')
})

module.exports = router
