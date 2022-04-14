const route = require("express").Router();

const controllerGuitar = require ('../controller/controller');

route.get('/find-guitar', controllerGuitar.findAllGuitars);
route.get('/guitar/:id', controllerGuitar.findByIDGuitar);

exports.module = route;
