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

const getAllUser = async () => {
  const allUsers = await models.getAllUser();
  if (allUsers) return allUsers;
  return null;
};

const getUserById = async (id) => {
  const user = await models.getUserById(id);
  if (user) return user;
  return null;
};

const deleteUserById = async (id) => {
  const result = await models.deleteUserById(id);
  if (result) return result;
  return null;
};

const updateUser = async (id, info) => {
  const user = await models.updateUser(id, info);
  if (user) return user;
  return null;
};

module.exports = {
  createUser,
  login,
  getAllUser,
  getUserById,
  updateUser,
  deleteUserById,
};
