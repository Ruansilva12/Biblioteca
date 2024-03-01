var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/exercicios', function(req, res, next) {
  res.send('lista de exercicios');
});

router.get('/provas', function(req, res, next) {
    res.send('bastante');
  });

  router.get('/notas', function(req, res, next) {
    res.send('ate que vai');
  });

module.exports = router;
