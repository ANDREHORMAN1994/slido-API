const { Router } = require('express');
const controllers = require('../controllers');
const { createPassHash, validateToken, validateAdmin } = require('../middleware');

const loginRouter = Router();

loginRouter.post('/user', createPassHash, controllers.createUser);
loginRouter.post('/login', controllers.login);

loginRouter.use(validateToken);
loginRouter.use(validateAdmin);
loginRouter.get('/users/:id', controllers.getById);
loginRouter.get('/users', controllers.getAll);
loginRouter.patch('/users/:id', createPassHash, controllers.update);
loginRouter.delete('/users/:id', controllers.deleteById);

module.exports = loginRouter;
