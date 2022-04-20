const guitarsService = require('../services/services');
const mongoose = require('mongoose');

const findAllGuitarsController = async (req, res) => {
  const guitars = await guitarsService.findGuitarsService();

  if (guitars.length == 0) {
    return res.status(404).send({ message: 'Not found more guitars' });
  }

  res.send(guitars);
};

const findByIDGuitarController = async (req, res) => {
  const idGuitar = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idGuitar)) {
    return res.status(400).send({ message: 'Id invalid' });
  }

  const chosenGuitar = await guitarsService.findByIDGuitarService(idGuitar);

  if (!chosenGuitar) {
    return res.status(404).send({ message: 'Id not found' });
  }

  res.send(chosenGuitar);
};

const createGuitarControler = async (req, res) => {
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
  const newGuitar = await guitarsService.createGuitarControler(guitar);

  res.status(201).send(newGuitar);
};

const updateGuitarControler = async (req, res) => {
  const idGuitar = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idGuitar)) {
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

  const updateGuitar = await guitarsService.updateGuitarControler(
    idGuitar,
    guitarEdit,
  );

  res.send(updateGuitar);
};

const deleteGuitarControler = async (req, res) => {
  const idGuitar = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idGuitar)) {
    return res.status(400).send({ message: 'Id invalid' });
  }

  await guitarsService.deleteGuitarControler(idGuitar);

  res.send({ message: 'Guitar Deleted' });
};

module.exports = {
  findAllGuitarsController,
  findByIDGuitarController,
  createGuitarControler,
  updateGuitarControler,
  deleteGuitarControler,
};
