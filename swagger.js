const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Slido API',
    version: '1.0.0',
    description: 'Documentação da minha API',
  },
  servers: [
    {
      url: 'http://slido-api-production.up.railway.app',
      description: 'Servidor de produção',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  host: 'localhost:3001', // substitua pelo seu domínio e porta.
  basePath: '/docs',
};

const options = {
  swaggerDefinition,
  apis: ['./src/app.js', './src/routes/*.js', './src/docs/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
