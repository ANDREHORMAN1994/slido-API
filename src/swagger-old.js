// require('dotenv').config();
// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');

// const url = process.env.BASE_URL || 'http://localhost:3001';

// const swaggerDefinition = {
//   openapi: '3.0.0',
//   info: {
//     title: 'Slido API',
//     version: '1.0.0',
//     description: 'Documentação da minha API',
//   },
//   servers: [
//     {
//       url,
//       description: url.includes('localhost')
//         ? 'Servidor de desenvolvimento' : 'Servidor de produção',
//     },
//   ],
//   components: {
//     securitySchemes: {
//       bearerAuth: {
//         type: 'apiKey',
//         name: 'Authorization',
//         in: 'header',
//         scheme: 'bearer',
//         bearerFormat: 'JWT',
//       },
//     },
//   },
//   host: url, // substitua pelo seu domínio e porta
//   basePath: '/docs',
// };

// const options = {
//   swaggerDefinition,
//   apis: ['./src/app.js', './src/routes/*.js', './src/docs/*.js'],
// };

// const swaggerSpec = swaggerJSDoc(options);

// module.exports = (app) => {
//   app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// };
