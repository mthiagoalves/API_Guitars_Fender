const route = require('express').Router();

const controllerGuitar = require('../controller/controller');

route.get('/find-guitar', controllerGuitar.findAllGuitarsController);
route.get('/guitar/:id', controllerGuitar.findByIDGuitarController);
route.post('/create', controllerGuitar.createGuitarControler);
route.put('/update/:id', controllerGuitar.updateGuitarControler);
route.delete('/delete/:id', controllerGuitar.deleteGuitarControler);

module.exports = route;
