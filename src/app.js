require('express-async-errors');
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const allRoutes = require('./routes');
const html = require('./utils/initialHTML');
// const swagger = require('./swagger');
const swaggerFile = require('../swagger_output.json');

const app = express();
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

// swagger(app);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (_req, res) => {
  res.send(html);
});

app.use(allRoutes);

app.use((err, _req, res, _next) => {
  const { message, statusCode } = err;
  return res.status(statusCode).json({ message });
});

module.exports = app;
