const { StatusCodes } = require('http-status-codes');
const services = require('../services');
const HandleError = require('../utils/handleError');

const createUser = async (req, res, next) => {
  const { body, passHash } = req;
  const infoUser = {
    email: body.email,
    password: passHash,
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

module.exports = {
  createUser,
};
