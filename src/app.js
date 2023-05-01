require('express-async-errors');
const express = require('express');
const cors = require('cors');
const swagger = require('../swagger');
const allRoutes = require('./routes');

const app = express();
swagger(app);

app.use(cors({
  origin: '*',
}));
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hey this is my API running 🥳');
});

app.use(allRoutes);

app.use((err, _req, res, _next) => {
  const { message, statusCode } = err;
  return res.status(statusCode).json({ message });
});

module.exports = app;
