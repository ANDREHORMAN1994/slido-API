const { Router } = require('express');
const controllers = require('../controllers');
const { createPassHash, validateToken, validateAdmin } = require('../middleware');

const loginRouter = Router();

loginRouter.post('/user', createPassHash, controllers.createUser);
loginRouter.post('/login', controllers.login);

loginRouter.use(validateToken);
loginRouter.get('/users/:id', validateAdmin, controllers.getUserById);
loginRouter.get('/users', validateAdmin, controllers.getAllUser);
loginRouter.patch('/users/:id', validateAdmin, createPassHash, controllers.updateUser);
loginRouter.delete('/users/:id', validateAdmin, controllers.deleteUserById);

module.exports = loginRouter;
