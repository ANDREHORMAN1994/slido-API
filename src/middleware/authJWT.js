require('dotenv').config();
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const HandleError = require('../utils/handleError');

const secret = process.env.JWT_SECRET || 'minhasenha123';

const createHashLogin = (infoUser) => {
  const token = jwt.sign(infoUser, secret, { expiresIn: '1h' });
  return token;
};

const validateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const { headers: { authorization: token } } = req;

  if (!authHeader) {
    const error = new HandleError(
      StatusCodes.UNAUTHORIZED,
      'Token não foi provido',
    );
    return next(error);
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      const error = new HandleError(
        StatusCodes.UNAUTHORIZED,
        'Token inválido',
      );
      return next(error);
    }

    console.log(decoded, 'infos token');
    req.user = decoded;
    return next();
  });
};

module.exports = {
  createHashLogin,
  validateToken,
};
