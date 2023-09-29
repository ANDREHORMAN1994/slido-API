/* eslint-disable arrow-body-style */
const swaggerCreateQuestion = (controller) => {
  // #swagger.start

  /*
    #swagger.path = '/slido'
    #swagger.method = 'post'
    #swagger.tags = ['Questions']
    #swagger.description = 'Criar uma nova pergunta com os dados fornecidos no corpo da requisição.'
  */

  /*
    #swagger.parameters['New Question'] = {
      in: 'body',
      description: 'Informações para criar uma nova pergunta.',
      required: true,
      type: 'object',
      schema: {
        question: 'Qual a melhor linguagem de programação?',
        answers: ['Javascript', 'Python', 'C++', 'Java'],
      }
    }
  */

  /*
    #swagger.security = [{
      "apiKeyAuth": []
    }]
  */

  /*
    #swagger.responses[201] = {
      description: 'Pergunta criada com sucesso.',
      schema: { $ref: '#/definitions/Question' }
    }
  */

  /*
    #swagger.responses[400] = {
      description: 'Bad Request.',
      schema: { message: 'Campos inválidos ou faltando.' }
    }
  */

  /*
    #swagger.responses[401-1] = {
      description: 'Unauthorized.',
      schema: { message: 'Token não foi provido.' }
    }
  */

  /*
    #swagger.responses[401-2] = {
      description: 'Unauthorized.',
      schema: { message: 'Token inválido.' }
    }
  */

  /*
    #swagger.responses[500] = {
      description: 'Internal Server Error.',
      schema: { message: 'Erro interno ao tentar criar uma pergunta.' }
    }
  */

  // #swagger.end
  return controller;
};

module.exports = swaggerCreateQuestion;
