const { Router } = require('express');
const controllers = require('../controllers');

const slidoRouter = Router();

slidoRouter.post('/slido', controllers.createQuestion);
slidoRouter.get('/slido', controllers.getAllQuestion);

module.exports = slidoRouter;
