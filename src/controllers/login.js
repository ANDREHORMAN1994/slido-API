const { StatusCodes } = require('http-status-codes');
const services = require('../services');
const HandleError = require('../utils/handleError');
const { comparePassHash, createHashLogin } = require('../middleware');

const createUser = async (req, res, next) => {
  const { body, password } = req;
  try {
    if (!body || !body.email || !body.password || !password) {
      throw new HandleError(
        StatusCodes.BAD_REQUEST,
        'Campos inválidos ou faltando.',
      );
    }
    const infoUser = { ...body, password };
    const newUser = await services.createUser(infoUser);
    if (newUser) {
      return res.status(StatusCodes.CREATED).json(newUser);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar criar o usuário.',
    );
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { body } = req;
  try {
    if (!body || !body.email || !body.password) {
      throw new HandleError(
        StatusCodes.BAD_REQUEST,
        'Campos inválidos ou faltando.',
      );
    }
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
      'Erro interno ao tentar acessar todos os usuários.',
    );
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { params: { id } } = req;
  try {
    if (!id) {
      throw new HandleError(
        StatusCodes.BAD_REQUEST,
        'ID inválido ou faltando.',
      );
    }
    const user = await services.getUserById(id);
    if (user) {
      return res.status(StatusCodes.OK).json(user);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar encontrar o usuário pelo id.',
    );
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  const { params: { id } } = req;
  try {
    if (!id) {
      throw new HandleError(
        StatusCodes.BAD_REQUEST,
        'ID inválido ou faltando.',
      );
    }
    const result = await services.deleteUserById(id);
    if (result) {
      return res.status(StatusCodes.NO_CONTENT).send();
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar deletar o usuário.',
    );
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { params: { id }, body, password } = req;
  try {
    if (!body || !body.email || !body.password || !password || !id) {
      throw new HandleError(
        StatusCodes.BAD_REQUEST,
        'Campos inválidos ou faltando.',
      );
    }
    const infoUser = { ...body, password };
    const user = await services.updateUser(id, infoUser);
    if (user) {
      return res.status(StatusCodes.OK).json(user);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar atualizar o usuário.',
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
