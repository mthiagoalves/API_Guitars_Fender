const guitarsService = require('../services/services');

const findAllGuitarsController = (req, res) => {
   const guitars = guitarsService.findGuitarsService();

   res.send(guitars);
};

const findByIDGuitarController = (req, res) => {
   const idParam = Number(req.params.id);
   const chosenGuitar = guitarsService.findByIDGuitarService(idParam);

   res.send(chosenGuitar);
};

module.exports = {
   findAllGuitarsController,
   findByIDGuitarController,
};
