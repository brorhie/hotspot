'use strict';

var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  res.send('respond with a account');
});

module.exports = router;
