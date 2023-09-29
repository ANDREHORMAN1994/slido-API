/* eslint-disable arrow-body-style */
const swaggerDeleteUserById = (controller) => {
  // #swagger.start

  /*
    #swagger.path = '/users/:id'
    #swagger.method = 'delete'
    #swagger.tags = ['Users']
    #swagger.description = 'Deletar um usuário identificado pelo ID fornecido na rota.'
  */

  /*
    #swagger.security = [{
      "apiKeyAuth": []
    }]
  */

  /*
    #swagger.responses[204] = {
      description: 'Usuário deletado com sucesso.'
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
    #swagger.responses[401-3] = {
      description: 'Unauthorized.',
      schema: { message: 'Esse usuário não tem permissão de realizar essa ação.' }
    }
  */

  /*
    #swagger.responses[500] = {
      description: 'Internal Server Error.',
      schema: { message: 'Erro interno ao tentar deletar o usuário.' }
    }
  */

  // #swagger.end
  return controller;
};

module.exports = swaggerDeleteUserById;
