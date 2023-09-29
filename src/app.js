require('express-async-errors');
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
const allRoutes = require('./routes');
const html = require('./utils/initialHTML');

const app = express();
const corsOptions = {
  origin: '*',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (_req, res) => {
  /* #swagger.ignore = true */
  res.send(html);
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(allRoutes);

app.use((err, _req, res, _next) => {
  const { message, statusCode = 500 } = err;
  return res.status(statusCode).json({ message });
});

module.exports = app;
