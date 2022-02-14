var express = require('express');
var router = express.Router();

/* GET business page. */
router.get('/business', function(req, res, next) {
  res.render('business', { title: 'Business' });
});

module.exports = router;
