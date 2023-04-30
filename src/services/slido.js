const models = require('../models');

const createQuestion = async (question) => {
  const newQuestion = await models.createQuestion(question);
  if (newQuestion) return newQuestion;
  return null;
};

const getAllQuestion = async () => {
  const allQuestion = await models.getAllQuestion();
  if (allQuestion) return allQuestion;
  return null;
};

const updateQuestion = async (id, info) => {
  const question = await models.updateQuestion(id, info);
  if (question) return question;
  return null;
};

const deleteQuestion = async (id) => {
  const result = await models.deleteQuestion(id);
  if (result) return result;
  return null;
};

module.exports = {
  createQuestion,
  getAllQuestion,
  updateQuestion,
  deleteQuestion,
};
