const express = require('express');
const router = express.Router();
const quizzController = require('../controllers/quizzController');

router.get('/quizz', quizzController.getQuiz);

router.post('/quizz', quizzController.createQuizz);

router.put('/quizz/:id', quizzController.updateQuizz);

router.delete('/quizz/:id', quizzController.deleteOneQuizz)

module.exports = router;