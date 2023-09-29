/* eslint-disable arrow-body-style */
const swaggerCreateUser = (controller) => {
  // #swagger.start

  /*
    #swagger.path = '/user'
    #swagger.method = 'post'
    #swagger.tags = ['Users']
    #swagger.description = 'Criar um novo usuário com os dados fornecidos no corpo da requisição.'
  */

  /*
    #swagger.parameters['New User'] = {
      in: 'body',
      description: 'Informações para criar um novo usuário.',
      required: true,
      type: 'object',
      schema: {
        "email": "andre@hotmail.com",
        "password": "1234567",
        "role": "admin"
      }
    }
  */

  /*
    #swagger.responses[201] = {
      description: 'Usuário criado com sucesso.',
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
    #swagger.responses[409] = {
      description: 'Conflict.',
      schema: { message: 'Já existe um usuário cadastrado com esse email.' }
    }
  */

  /*
    #swagger.responses[500-1] = {
      description: 'Internal Server Error.',
      schema: { message: 'Erro ao tentar criar o hash da senha.' }
    }
  */

  /*
    #swagger.responses[500-2] = {
      description: 'Internal Server Error.',
      schema: { message: 'Erro interno ao tentar criar o usuário.' }
    }
  */

  // #swagger.end
  return controller;
};

module.exports = swaggerCreateUser;
