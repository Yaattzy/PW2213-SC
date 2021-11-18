const express = require('express');

const routes = express.Router();

const personasController = require('../controllers/personasController');

routes.get('/personas', personasController.listar);

routes.get('/personas/:id', personasController.obtenerPersona);

routes.post('/personas', personasController.crear)

module.exports = routes;

