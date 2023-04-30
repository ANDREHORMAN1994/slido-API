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

module.exports = {
  createQuestion,
  getAllQuestion,
};
