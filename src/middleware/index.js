const { createPassHash, comparePassHash } = require('./authPassword');
const { createHashLogin, validateToken } = require('./authJWT');

module.exports = {
  createPassHash,
  comparePassHash,
  createHashLogin,
  validateToken,
};
