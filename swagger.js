require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')();

const URL = process.env.BASE_URL || 'http://localhost:3001';
const OUTPUTFILE = './swagger_output.json';
const ENDPOINTSFILES = ['./src/app.js', './src/routes/*.js'];

const DOC = {
  info: {
    version: '1.0.0',
    title: 'Slido API',
    description: 'Documentação da minha API',
  },
  host: URL.split('//')[1],
  basePath: '/',
  schemes: URL.includes('https') ? ['https'] : ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Users',
      description: 'Endpoints relacionados a usuários',
    },
    {
      name: 'Questions',
      description: 'Endpoints relacionados a perguntas',
    },
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header', // can be "header", "query" or "cookie"
      name: 'Authorization',
      description: 'Adicione aqui o Token de Acesso!',
    },
  },
  definitions: {
    User: {
      _id: 'abc123',
      $email: 'andre@hotmail.com',
      $password: '1234567',
      $role: 'admin',
    },
    Question: {
      _id: 'abc123',
      $question: 'Qual a melhor linguagem de programação?',
      $answers: ['Javascript', 'Python', 'C++', 'Java'],
      author: 'andre@hotmail.com',
      createdAt: '2021-06-21T18:30:09.000Z',
      updatedAt: '2021-06-21T18:30:09.000Z',
    },
  },
};

// Gere a documentação Swagger
swaggerAutogen(OUTPUTFILE, ENDPOINTSFILES, DOC);
