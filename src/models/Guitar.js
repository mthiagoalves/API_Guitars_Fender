const mongoose = require('mongoose');

const GuitarSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  model: {
    type: String,
    require: true,
  },
});

const Guitar = mongoose.model('guitars', GuitarSchema);

module.exports = Guitar;
