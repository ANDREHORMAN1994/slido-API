const { Router } = require('express');
const controllers = require('../controllers');

const loginRouter = Router();

loginRouter.get('/login', controllers.getUsers);

module.exports = loginRouter;
