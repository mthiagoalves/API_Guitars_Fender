const mongoose = require('mongoose');

const validIdGuitar = (req, res, next) => {
  const idGuitar = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idGuitar)) {
    return res.status(400).send({ message: 'Id invalid' });
  }
  next();
};

const validObjectGuitar = (req, res, next) => {
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
  next();
};

module.exports = {
  validIdGuitar,
  validObjectGuitar,
};
