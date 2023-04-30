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
      return res.status(StatusCodes.CREATED).json({ newUser });
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

module.exports = {
  createUser,
  login,
};
