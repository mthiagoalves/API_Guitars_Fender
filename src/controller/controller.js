const guitarsService = require('../services/services');

const findAllGuitarsController = (req, res) => {
   const guitars = guitarsService.findGuitarsService();

   res.send(guitars);
};

const findByIDGuitarController = (req, res) => {
   const idGuitar = Number(req.params.id);
   const chosenGuitar = guitarsService.findByIDGuitarService(idGuitar);

   res.send(chosenGuitar);
};

const createGuitarControler = (req, res) => {
   const guitar = req.body;
   const newGuitar = guitarsService.createGuitarControler(guitar);
   res.send(newGuitar);
};

const updateGuitarControler = (req, res) => {
   const idGuitar = Number(req.params.id);
   const guitarEdit = req.body;
   const updateGuitar = guitarsService.updateGuitarControler(
      idGuitar,
      guitarEdit,
   );

   res.send(updateGuitar);
};

const deleteGuitarControler = (req, res) => {
   const idGuitar = req.params.id;
   guitarsService.deleteGuitarControler(idGuitar);

   res.send({ massage: 'Guitar Deleted' });
};

module.exports = {
   findAllGuitarsController,
   findByIDGuitarController,
   createGuitarControler,
   updateGuitarControler,
   deleteGuitarControler,
};
