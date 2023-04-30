const { createPassHash, comparePassHash } = require('./authPassword');
const { createHashLogin, validateToken, validateAdmin } = require('./authJWT');

module.exports = {
  createPassHash,
  comparePassHash,
  createHashLogin,
  validateToken,
  validateAdmin,
};
