const guitarsService = require('../services/services');

const findAllGuitarsController = (req, res) => {
   const guitars = guitarsService.findGuitarsService();

   if (guitars.length == 0) {
      return res.status(404).send({ message: 'Not found more guitars' });
   }

   res.send(guitars);
};

const findByIDGuitarController = (req, res) => {
   const idGuitar = Number(req.params.id);

   if (!idGuitar) {
      return res.status(400).send({ message: 'Id invalid' });
   }

   const chosenGuitar = guitarsService.findByIDGuitarService(idGuitar);

   if (!chosenGuitar) {
      return res.status(404).send({ message: 'Id not found' });
   }

   res.send(chosenGuitar);
};

const createGuitarControler = (req, res) => {
   const guitar = req.body;

   if (
      !guitar ||
      !guitar.name ||
      !guitar.price ||
      !guitar.img ||
      !guitar.description
   ) {
      return res.status(400).send({ message: 'Send all info the guitar' });
   }
   const newGuitar = guitarsService.createGuitarControler(guitar);
   res.status(201).send(newGuitar);
};

const updateGuitarControler = (req, res) => {
   const idGuitar = Number(req.params.id);

   if (!idGuitar) {
      return res.status(400).send({ message: 'Id invalid' });
   }

   const guitarEdit = req.body;

   if (
      !guitarEdit ||
      !guitarEdit.name ||
      !guitarEdit.price ||
      !guitarEdit.img ||
      !guitarEdit.description
   ) {
      return res.status(400).send({ message: 'Send all info the guitar' });
   }

   const updateGuitar = guitarsService.updateGuitarControler(
      idGuitar,
      guitarEdit,
   );

   res.send(updateGuitar);
};

const deleteGuitarControler = (req, res) => {
   const idGuitar = Number(req.params.id);

   if (!idGuitar) {
      return res.status(400).send({ message: 'Id invalid' });
   }

   guitarsService.deleteGuitarControler(idGuitar);

   res.send({ message: 'Guitar Deleted' });
};

module.exports = {
   findAllGuitarsController,
   findByIDGuitarController,
   createGuitarControler,
   updateGuitarControler,
   deleteGuitarControler,
};
