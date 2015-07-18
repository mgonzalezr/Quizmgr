var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var creditoController = require('../creditos/creditos_controller');
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz', errors: []});
});
*/
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz'});
});

// Definición de rutas de /quizes

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

router.get('/author/creditos', creditoController.creditos);

module.exports = router;