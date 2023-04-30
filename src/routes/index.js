const { Router } = require('express');
const loginRouter = require('./login');
const slidoRouter = require('./slido');
const swagger = require('../../swagger');

const allRoutes = Router();
swagger(allRoutes);

allRoutes.use('/', loginRouter);
allRoutes.use('/', slidoRouter);

module.exports = allRoutes;
