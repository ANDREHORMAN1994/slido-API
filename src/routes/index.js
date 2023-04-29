const { Router } = require('express');
const loginRouter = require('./login');

const allRoutes = Router();

allRoutes.use('/', loginRouter);

module.exports = allRoutes;
