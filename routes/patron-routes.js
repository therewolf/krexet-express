const express = require('express')
const router = express.Router()

const db = require('../database')
const Show = db.Show
const Patron = db.Patron

router.post('/openapi/registerPatron', (req, res) => {
    var patron = req.body
    patron.hasPayed = false
    var showId = patron.show._id
    Show.findByIdAndUpdate(showId,{$push: {"patrons": patron}},
    {safe:true, upsert: true, new: true},
    function(err, model) {
        console.log(err)
    })
    res.send('registering patron')
})

// Put routes
router.put('/api/registerPayment', (req, res) => {
    res.send('registering payment')
})

router.delete('/api/deletePatron', (req, res) => {
    res.send('deleting patron')
})

module.exports = router

