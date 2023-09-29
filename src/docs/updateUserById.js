/* eslint-disable arrow-body-style */
const swaggerUpdateUserById = (controller) => {
  // #swagger.start

  /*
    #swagger.path = '/users/:id'
    #swagger.method = 'patch'
    #swagger.tags = ['Users']
    #swagger.description = 'Retornar um usuário atualizado com o ID especificado.'
  */

  /*
    #swagger.parameters['New Infos'] = {
      in: 'body',
      description: 'Novas informações do usuário.',
      required: true,
      type: 'object',
      schema: {
        "email": "xablau@hotmail.com",
        "password": "12345678"
      }
    }
  */

  /*
    #swagger.security = [{
      "apiKeyAuth": []
    }]
  */

  /*
    #swagger.responses[200] = {
      description: 'Usuário atualizado com sucesso.',
      schema: { $ref: '#/definitions/User' }
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
    #swagger.responses[401-3] = {
      description: 'Unauthorized.',
      schema: { message: 'Esse usuário não tem permissão de realizar essa ação.' }
    }
  */

  /*
    #swagger.responses[409] = {
      description: 'Conflict.',
      schema: { message: 'Já existe um usuário cadastrado com esse email.' }
    }
  */

  /*
    #swagger.responses[500-1] = {
      description: 'Internal Server Error.',
      schema: { message: 'Erro interno ao tentar atualizar o usuário.' }
    }
  */

  /*
    #swagger.responses[500-2] = {
      description: 'Internal Server Error.',
      schema: { message: 'Erro ao tentar criar o hash da senha.' }
    }
  */

  // #swagger.end
  return controller;
};

module.exports = swaggerUpdateUserById;
