const express = require('express');

const routes = express.Router();

const personasController = require('../controllers/personasController');

routes.get('/', personasController.listar);

module.exports = routes;

