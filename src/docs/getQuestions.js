/* eslint-disable arrow-body-style */
const swaggerGetQuestions = (controller) => {
  // #swagger.start

  /*
    #swagger.path = '/slido'
    #swagger.method = 'get'
    #swagger.tags = ['Questions']
    #swagger.description = 'Retornar um array de objetos com todas as perguntas cadastradas.'
  */

  /*
    #swagger.security = [{
      "apiKeyAuth": []
    }]
  */

  /*
    #swagger.responses[200] = {
      description: 'Perguntas retornadas com sucesso.',
      schema: [{ $ref: '#/definitions/Question' }]
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
      schema: { message: 'Erro interno ao tentar acessar todas as perguntas.' }
    }
  */

  // #swagger.end
  return controller;
};

module.exports = swaggerGetQuestions;
