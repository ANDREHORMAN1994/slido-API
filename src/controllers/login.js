const { StatusCodes } = require('http-status-codes');
const services = require('../services');
const HandleError = require('../utils/handleError');
const { comparePassHash, createHashLogin } = require('../middleware');

const createUser = async (req, res, next) => {
  const { body, password } = req;
  const infoUser = {
    ...body,
    password,
  };
  try {
    const newUser = await services.createUser(infoUser);
    if (newUser) {
      return res.status(StatusCodes.CREATED).json(newUser);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro ao tentar criar o usuário',
    );
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { body } = req;
  try {
    const user = await services.login(body);
    const token = createHashLogin(user);
    req.token = token;
    comparePassHash(body.password, { ...user, token }, res, next);
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (_req, res, next) => {
  try {
    const allUsers = await services.getAllUser();
    if (allUsers) {
      return res.status(StatusCodes.OK).json(allUsers);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro ao tentar listar todos os usuários',
    );
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { params: { id } } = req;
  try {
    const user = await services.getUserById(id);
    if (user) {
      return res.status(StatusCodes.OK).json(user);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro ao tentar listar usuário pelo id',
    );
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  const { params: { id } } = req;
  try {
    const result = await services.deleteUserById(id);
    if (result) {
      return res.status(StatusCodes.NO_CONTENT).send();
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro ao tentar deletar um usuário pelo id',
    );
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { params: { id }, body, password } = req;
  const infoUser = {
    ...body,
    password,
  };
  try {
    const user = await services.updateUser(id, infoUser);
    if (user) {
      return res.status(StatusCodes.OK).json(user);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro ao tentar atualizar o usuário, provavelmente o email já existe',
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  login,
  getAllUser,
  getUserById,
  updateUser,
  deleteUserById,
};
