const express = require('express');

const routes = express.Router();

const personasController = require('../controllers/personasController');

routes.get('/personas', personasController.listar);

routes.get('/personas/:id', personasController.obtenerPersona);

routes.post('/personas', personasController.crear);

routes.put('/personas/:id', personasController.editar);

routes.delete('/personas/:id',personasController.eliminar);

module.exports = routes;

