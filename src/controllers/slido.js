const { StatusCodes } = require('http-status-codes');
const HandleError = require('../utils/handleError');
const services = require('../services');

const createQuestion = async (req, res, next) => {
  const { body, user } = req;
  // console.log(user, 'usuario');
  try {
    const newQuestion = await services.createQuestion({
      ...body,
      author: user.email,
    });
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

const updateQuestion = async (req, res, next) => {
  const { params: { id }, body } = req;
  try {
    const question = await services.updateQuestion(id, body);
    if (question) {
      return res.status(StatusCodes.OK).json(question);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro ao tentar atualizar uma pergunta',
    );
  } catch (error) {
    next(error);
  }
};

const deleteQuestion = async (req, res, next) => {
  const { params: { id } } = req;
  try {
    const result = await services.deleteQuestion(id);
    if (result) {
      return res.status(StatusCodes.NO_CONTENT).send();
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro ao tentar deletar uma pergunta',
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createQuestion,
  getAllQuestion,
  updateQuestion,
  deleteQuestion,
};
