const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');
const HandleError = require('../utils/handleError');

const createPassHash = (req, _res, next) => {
  const { body: { password } } = req;
  const saltRounds = 10;
  try {
    bcrypt.hash(password.toString(), saltRounds, (err, hash) => {
      if (err || !hash) {
        const error = new HandleError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          'Erro ao tentar criar o hash da senha',
        );
        return next(error);
      }
      req.password = hash;
      next();
    });
  } catch (error) {
    next(error);
  }
};

const comparePassHash = (password, user, res, next) => {
  bcrypt.compare(password, user.password, (_err, result) => {
    if (result) {
      console.log('Senha correta!');
      return res.status(StatusCodes.OK).json(user);
    }
    console.log('Senha incorreta!');
    const error = new HandleError(
      StatusCodes.UNAUTHORIZED,
      'A senha está errada ou incompatível.',
    );
    next(error);
  });
};

module.exports = {
  createPassHash,
  comparePassHash,
};
