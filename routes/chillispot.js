'use strict';

var express = require('express');
var router = express.Router();

/* GET chillispot page. */
router.get('/', function(req, res) {
  res.render('chillispot', { title: 'Express' });
});

module.exports = router;
