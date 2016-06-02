var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/navigation', function(req, res, next) {
  res.render('navigation', { title: 'Express' });
});

router.get('/splash', function(req, res, next) {
  res.render('splash', { title: 'Express' });
});

router.get('/original', function(req, res, next) {
  res.render('indexOriginal');
});

module.exports = router;
