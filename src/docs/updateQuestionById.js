/* eslint-disable arrow-body-style */
const swaggerUpdateQuestionById = (controller) => {
  // #swagger.start

  /*
    #swagger.path = '/slido/:id'
    #swagger.method = 'patch'
    #swagger.tags = ['Questions']
    #swagger.description = 'Retornar uma pergunta ou resposta atualizada com o ID especificado.'
  */

  /*
    #swagger.parameters['New Infos'] = {
      in: 'body',
      description: 'Novas informações relacionadas a pergunta e as respostas.',
      required: true,
      type: 'object',
      schema: {
        question: 'Qual a melhor área da tecnologia?',
        answers: [ 'Front-end', 'Back-end', 'Full-stack' ],
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
      description: 'Pergunta e respostas atualizadas com sucesso.',
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
      schema: { message: 'Erro interno ao tentar atualizar uma pergunta.' }
    }
  */

  // #swagger.end
  return controller;
};

module.exports = swaggerUpdateQuestionById;
