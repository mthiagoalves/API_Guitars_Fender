const Guitars = require('../models/Guitar');

const findGuitarsService = async () => {
  const guitars = await Guitars.find();

  return guitars;
};

const findByIDGuitarService = async (idGuitar) => {
  const guitar = await Guitars.findById(idGuitar);

  return guitar;
};

const createGuitarControler = async (newGuitar) => {
  const newGuitarcreated = await Guitars.create(newGuitar);
  return newGuitarcreated;
};

const updateGuitarControler = async (idGuitar, guitarEdit) => {
  const guitarUpdate = await Guitars.findByIdAndUpdate(idGuitar, guitarEdit);
  return guitarUpdate;
};

const deleteGuitarControler = async (idGuitar) => {
  return await Guitars.findByIdAndDelete(idGuitar);
};

module.exports = {
  findGuitarsService,
  findByIDGuitarService,
  createGuitarControler,
  updateGuitarControler,
  deleteGuitarControler,
};
