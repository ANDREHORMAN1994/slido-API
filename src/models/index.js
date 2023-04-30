const {
  createUser, login, getAllUser, getUserById, updateUser, deleteUserById,
} = require('./login');

const { createQuestion, getAllQuestion } = require('./slido');

module.exports = {
  createUser,
  login,
  getAllUser,
  getUserById,
  updateUser,
  deleteUserById,
  createQuestion,
  getAllQuestion,
};
