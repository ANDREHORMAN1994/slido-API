const { Router } = require('express');
const controllers = require('../controllers');
const { createPassHash, validateToken } = require('../middleware');

const loginRouter = Router();

loginRouter.post('/user', createPassHash, controllers.createUser);
loginRouter.post('/login', controllers.login);

loginRouter.use(validateToken);
loginRouter.get('/users/:id', controllers.getById);
loginRouter.get('/users', controllers.getAll);

module.exports = loginRouter;
