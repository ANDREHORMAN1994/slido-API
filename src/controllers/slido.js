const { StatusCodes } = require('http-status-codes');
const HandleError = require('../utils/handleError');
const services = require('../services');

const createQuestion = async (req, res, next) => {
  const { body } = req;
  try {
    const newQuestion = await services.createQuestion(body);
    if (newQuestion) {
      return res.status(StatusCodes.CREATED).json(newQuestion);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro ao tentar adicionar uma pergunta',
    );
  } catch (error) {
    next(error);
  }
};

const getAllQuestion = async (_req, res, next) => {
  try {
    const allQuestion = await services.getAllQuestion();
    if (allQuestion) {
      return res.status(StatusCodes.OK).json(allQuestion);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro ao tentar listar todas as perguntas',
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createQuestion,
  getAllQuestion,
};
