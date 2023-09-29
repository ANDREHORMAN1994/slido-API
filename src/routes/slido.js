const { Router } = require('express');
const controllers = require('../controllers');
const swaggerCreateQuestion = require('../docs/createQuestion');
const swaggerGetQuestions = require('../docs/getQuestions');
const swaggerUpdateQuestionById = require('../docs/updateQuestionById');
const swaggerDeleteQuestionById = require('../docs/deleteQuestionById');

const slidoRouter = Router();

slidoRouter.post('/slido', swaggerCreateQuestion(controllers.createQuestion));
slidoRouter.get('/slido', swaggerGetQuestions(controllers.getAllQuestion));
slidoRouter.patch('/slido/:id', swaggerUpdateQuestionById(controllers.updateQuestion));
slidoRouter.delete('/slido/:id', swaggerDeleteQuestionById(controllers.deleteQuestion));

module.exports = slidoRouter;
