const { Router } = require('express');
const controllers = require('../controllers');
const { createPassHash } = require('../middleware');

const loginRouter = Router();

loginRouter.post('/user', createPassHash, controllers.createUser);
loginRouter.post('/login', controllers.login);

module.exports = loginRouter;
