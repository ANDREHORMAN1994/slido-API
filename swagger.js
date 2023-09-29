const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/app.js', './src/routes/*.js', './src/docs/*.js'];

swaggerAutogen(outputFile, endpointsFiles);
