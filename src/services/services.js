const guitars = [
  {
    id: 01,
    name: 'JV Modified 50s HSS',
    description:
      'The JV Modified Series combines classic aesthetics with modern playability to suit the needs of today guitarist.',
    img: './assets/img/001.png',
    price: '1329.99',
    model: 'Stratocaster',
  },
  {
    id: 02,
    name: 'American Professional II Deluxe',
    description:
      'The American Professional II Telecaster® Deluxe draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today’s working player.',
    img: './assets/img/002.png',
    price: '1749.99',
    model: 'Telecaster',
  },
  {
    id: 03,
    name: 'Jim Root',
    description:
      'For heavy, molten nu-metal Tele® style, the Jim Root Telecaster delivers crushing detuned tone with a stark utilitarian look. ',
    img: './assets/img/003.png',
    price: '1449.99',
    model: 'Stratocaster',
  },
  {
    id: 04,
    name: 'Player HH',
    description:
      'erfect for pummeling musical assaults, the Player Telecaster HH is pure Fender, through and through.',
    img: './assets/img/004.png',
    price: '1449.99',
    model: 'Telecaster',
  },
  {
    id: 05,
    name: 'JIMMY PAGE',
    description:
      'When the opening riff of “Good Times Bad Times” came through the radio in 1969, everything changed.',
    img: './assets/img/005.png',
    price: '1599.99',
    model: 'Telecaster',
  },
  {
    id: 06,
    name: 'JIM ROOT JAZZMASTER®',
    description:
      'Stark, dark and menacing, the crushing Jim Root Jazzmaster guitar has got to be the most distinctively minimalist version of the instrument ever devised in the models entire half-century history.',
    img: './assets/img/006.png',
    price: '1949.99',
    model: 'Telecaster',
  },
  {
    id: 07,
    name: 'VINTERA® 60S BIGSBY®',
    description:
      'For players who want the style and sound of Fender classic years, we created the Vintera® ‘60s Telecaster® Bigsby.',
    img: './assets/img/007.png',
    price: '1199.99',
    model: 'Telecaster',
  },
];

const findGuitarsService = () => {
  return guitars;
};

const findByIDGuitarService = (idGuitar) => {
  const guitar = guitars.find((guitars) => guitars.id === idGuitar);

  return guitar;
};

const createGuitarControler = (newGuitar) => {
  const newId = guitars.length + 1;
  newGuitar.id = newId;
  guitars.push(newGuitar);

  return newGuitar;
};

const updateGuitarControler = (idGuitar, guitarEdit) => {
  guitarEdit['id'] = idGuitar;
  const guitarIndex = guitars.findIndex((guitar) => guitar.id == idGuitar);
  guitars[guitarIndex] = guitarEdit;

  return guitarEdit;
};

const deleteGuitarControler = (idGuitar) => {
  const guitarsIndex = guitars.findIndex((guitar) => guitar.id == idGuitar);

  return guitars.splice(guitarsIndex, 1);
};

module.exports = {
  findGuitarsService,
  findByIDGuitarService,
  createGuitarControler,
  updateGuitarControler,
  deleteGuitarControler,
};
