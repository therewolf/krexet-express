const express = require('express');
const router = express.Router()

router.use('/api/patron', require('./patron-routes'))
router.use('/api/show', require('./show-routes'))

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
