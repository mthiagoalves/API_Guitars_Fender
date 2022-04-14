const route = require('express').Router();

const controllerGuitar = require('../controller/controller');

route.get('/find-guitar', controllerGuitar.findAllGuitarsController);
route.get('/guitar/:id', controllerGuitar.findByIDGuitarController);

module.exports = route;
