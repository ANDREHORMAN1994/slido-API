const {
  createUser, login, getAllUser, getUserById, updateUser, deleteUserById,
} = require('./login');

const {
  createQuestion, getAllQuestion, updateQuestion, deleteQuestion,
} = require('./slido');

module.exports = {
  createUser,
  login,
  getAllUser,
  getUserById,
  updateUser,
  deleteUserById,
  createQuestion,
  getAllQuestion,
  updateQuestion,
  deleteQuestion,
};
