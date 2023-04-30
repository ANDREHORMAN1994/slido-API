const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');
const HandleError = require('../utils/handleError');

const createPassHash = (req, _res, next) => {
  const { body: { password } } = req;
  const saltRounds = 10;
  try {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err || !hash) {
        throw new HandleError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          'Erro ao tentar criar o hash da senha',
        );
      }
      req.passHash = hash;
      next();
    });
  } catch (error) {
    next(error);
  }
};

const comparePassHash = (password, hash) => {
  bcrypt.compare(password, hash, (err, result) => {
    if (err || !result) {
      throw new HandleError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'A senha estar errada ou incompatível',
      );
    } else if (result) {
      console.log('Senha correta!');
    } else {
      console.log('Senha incorreta!');
    }
  });
};

module.exports = {
  createPassHash,
  comparePassHash,
};
