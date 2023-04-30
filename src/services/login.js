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
  const info = await models.login(user);
  if (info) {
    return info;
  }
  throw new HandleError(
    StatusCodes.INTERNAL_SERVER_ERROR,
    'Esse usuário não existe',
  );
};

const getAll = async () => {
  const allUsers = await models.getAll();
  if (allUsers) return allUsers;
  return null;
};

const getById = async (id) => {
  const user = await models.getById(id);
  if (user) return user;
  return null;
};

module.exports = {
  createUser,
  login,
  getAll,
  getById,
};
