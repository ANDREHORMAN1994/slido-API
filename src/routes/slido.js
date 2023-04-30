const { Router } = require('express');
const controllers = require('../controllers');

const slidoRouter = Router();

slidoRouter.post('/slido', controllers.createQuestion);
slidoRouter.get('/slido', controllers.getAllQuestion);
slidoRouter.patch('/slido/:id', controllers.updateQuestion);
slidoRouter.delete('/slido/:id', controllers.deleteQuestion);

module.exports = slidoRouter;
