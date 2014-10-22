/**
 * Created by Lookis (lookisliu@gmail.com) on 10/22/14.
 */
'use strict';

var express = require('express');
var router = express.Router();

router.post('/chillispot', function(req, res) {
  res.send('respond with a chillispot');
});

module.exports = router;
