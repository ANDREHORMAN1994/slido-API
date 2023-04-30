const { StatusCodes } = require('http-status-codes');
const models = require('../models');
const HandleError = require('../utils/handleError');

const createUser = async (user) => {
  const newUser = await models.createUser(user);
  if (newUser) return newUser;
  throw new HandleError(
    StatusCodes.INTERNAL_SERVER_ERROR,
    'Esse email já foi cadastrado',
  );
};

const login = async (user) => {
  const result = await models.login(user);
  return result;
};

module.exports = {
  createUser,
  login,
};
