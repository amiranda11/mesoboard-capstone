var express = require('express');
// const { router } = require('../app');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('API is working properly');
});

module.exports = router;