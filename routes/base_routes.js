var express = require('express');
var router = express.Router();
var pkg = require('../package.json');



/* GET home page. */
router.get('/', function(req, res, next) {
  const params = {
    title: 'Home page del progetto ' + pkg.name,
    framework: 'Express.js',
    appName: pkg.name,
    result: ''
  };
  res.render('index', params);
});

// Elaborazione server-side da <form> html con POST automatico
router.post('/calcola', function(req, res, next) {
  const num1 = parseFloat( req.body.num1 );
  const num2 = parseFloat( req.body.num2 );
  const risultato = num1 + num2;

  const params = {
    title: 'Home page del progetto ' + pkg.name,
    framework: 'Express.js',
    appName: pkg.name,
    result: `La somma di ${num1} e ${num2} è: ${risultato}`
  };
  
  res.render('index', params);
});


module.exports = router;
