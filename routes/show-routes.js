const express = require('express')
const router = express.Router()

const db = require('../database')
const Show = db.Show
const Patron = db.Patron

router.post('/createShow', (req, res) => {
    let newShow = new Show(req.body)
    newShow.save((err) => {
        if (err) return console.error(err)
    })
    res.send('New show created')
})

// Get routes
router.get('/getShows', (req, res) => {
    Show.find((err, shows) => {
        if (err) return console.error(err)
        res.send(shows)
    })
})

router.put('/updateShow', (req, res) => {
    let newShow = req.body
    let query = { "_id" : newShow._id }
    let options = {}
    let update = { date  : newShow.date,
                   price : newShow.price,
                   seats : newShow.seats
                   }
    Show.findOneAndUpdate(query, update, options, (err, show) => {
        if (err) { console.log(error) }
    })
    res.send('show changed')
})

// Delete routes
router.delete('/deleteShow/:showId', (req, res) => {
    Show.remove({"_id" : req.params.showId }, () => {
        res.send('deleting show')
    })
})

router.delete('/deleteAllShows', (req, res) => {
    Show.remove({}, (err) => {
        if (err) return console.log(err)
    })
    res.send('Deleting all shows')
})

module.exports = router
