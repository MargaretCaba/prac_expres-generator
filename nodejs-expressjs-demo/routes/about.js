var express = require('express');
var router = express.Router();

// vamos a importar el modulo de quote.js
var quote = require('../quote');

/* GET home page. */
router.get('/', function(req, res, next) {
        // esto nos hara tener o obtener la cita aleatoria
    var randomQuote = quote.getQuote();

    // lo que vamos hacer aqui es renderizar(o sea mostrar de forma dinamica) esta vista y enviarsela como respuesta 
  res.render('about', { quote: randomQuote});
});

module.exports = router;
