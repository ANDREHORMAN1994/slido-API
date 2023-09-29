const { Router } = require('express');
const controllers = require('../controllers');
const {
  createPassHash,
  validateToken,
  validateAdmin,
} = require('../middleware');
const swaggerCreateUser = require('../docs/createUser');
const swaggerLoginUser = require('../docs/loginUser');
const swaggerGetUserById = require('../docs/getUserById');
const swaggerGetUsers = require('../docs/getUsers');
const swaggerUpdateUserById = require('../docs/updateUserById');
const swaggerDeleteUserById = require('../docs/deleteUserById');

const loginRouter = Router();

loginRouter.post(
  '/user',
  createPassHash,
  swaggerCreateUser(controllers.createUser),
);
loginRouter.post('/login', swaggerLoginUser(controllers.login));

loginRouter.use(validateToken);
loginRouter.get('/users/:id', swaggerGetUserById(controllers.getUserById));
loginRouter.get('/users', swaggerGetUsers(controllers.getAllUser));
loginRouter.patch(
  '/users/:id',
  validateAdmin,
  createPassHash,
  swaggerUpdateUserById(controllers.updateUser),
);
loginRouter.delete(
  '/users/:id',
  validateAdmin,
  swaggerDeleteUserById(controllers.deleteUserById),
);

module.exports = loginRouter;
