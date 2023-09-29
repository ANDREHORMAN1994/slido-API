/* eslint-disable arrow-body-style */
const swaggerDeleteQuestionById = (controller) => {
  // #swagger.start

  /*
    #swagger.path = '/slido/:id'
    #swagger.method = 'delete'
    #swagger.tags = ['Questions']
    #swagger.description = 'Deletar uma pergunta identificada pelo ID fornecido na rota.'
  */

  /*
    #swagger.security = [{
      "apiKeyAuth": []
    }]
  */

  /*
    #swagger.responses[204] = {
      description: 'Pergunta deletada com sucesso.'
    }
  */

  /*
    #swagger.responses[400] = {
      description: 'Bad Request.',
      schema: { message: 'ID inválido ou faltando.' }
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
      schema: { message: 'Erro interno ao tentar deletar uma pergunta.' }
    }
  */

  // #swagger.end
  return controller;
};

module.exports = swaggerDeleteQuestionById;
