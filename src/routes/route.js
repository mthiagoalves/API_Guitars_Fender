const route = require('express').Router();
const controllerGuitar = require('../controller/controller');
const {validIdGuitar, validObjectGuitar} = require('../middlewares/middlewares')

route.get('/find-guitar', controllerGuitar.findAllGuitarsController);
route.get('/guitar/:id', validIdGuitar, controllerGuitar.findByIDGuitarController);
route.post('/create', validObjectGuitar, controllerGuitar.createGuitarControler);
route.put('/update/:id', validIdGuitar, validObjectGuitar, controllerGuitar.updateGuitarControler);
route.delete('/delete/:id', validIdGuitar, controllerGuitar.deleteGuitarControler);

module.exports = route;
