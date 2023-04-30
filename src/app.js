require('express-async-errors');
const express = require('express');
const cors = require('cors');
const allRoutes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use(allRoutes);

app.use((err, _req, res, _next) => {
  const { message, statusCode } = err;
  return res.status(statusCode).json({ message });
});

module.exports = app;
