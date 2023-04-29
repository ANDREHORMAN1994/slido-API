const { StatusCodes } = require('http-status-codes');

const getUsers = (_req, res) => res.status(StatusCodes.OK).send('TESTE');

module.exports = {
  getUsers,
};
