const { Router } = require('express');
const loginRouter = require('./login');
const slidoRouter = require('./slido');

const allRoutes = Router();

allRoutes.use('/', loginRouter);
allRoutes.use('/', slidoRouter);

module.exports = allRoutes;
