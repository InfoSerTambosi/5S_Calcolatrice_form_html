var express = require('express');
var router = express.Router();
var pkg = require('../package.json');



/* GET home page. */
router.get('/', function(req, res, next) {
  const params = {
    title: `Home page del progetto "${pkg.name}"`,
    framework: 'Express.js',
    appName: pkg.name,
    result: ''
  };

  res.render('index', params);
});


router.get('/calcola2', function(req, res, next) {
  const N1 = parseFloat(req.query.num1);
  const N2 = parseFloat(req.query.num2);
  const risultato = N1 + N2;
  
  const params = {
    title: 'Risultato eleborazione',
    result: `Ho sommato ${N1} e ${N2} e il risultato è: ${risultato}`
  };

  res.render('risultato', params);
});

// Elaborazione server-side da <form> html con POST automatico
router.post('/calcola', function(req, res, next) {
  const num1 = parseFloat( req.body.num1 );
  const num2 = parseFloat( req.body.num2 );
  const risultato = num1 + num2;

  const params = {
    title: 'Risultato eleborazione lato server:',
    result: `La somma di ${num1} e ${num2} è: ${risultato}`
  };
  
  res.render('index', params);
});


module.exports = router;
