const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

const guitar = [
  {
    id: 01,
    name: "Nile Rodgers Hitmaker",
    description:
      "Nile Rodgers has written, produced, and performed on recordings that have sold more than 500-million albums globally.",
    img: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0115922705_fen_ins_frt_1_rr.jpg",
    price: "2599.99",
    model: "Stratocaster",
  },
  {
    id: 02,
    name: "JV Modified 50s HSS",
    description:
      "The JV Modified Series combines classic aesthetics with modern playability to suit the needs of today’s guitarist.",
    img: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10004/0251802303_fen_ins_frt_1_rr.jpg",
    price: "1329.99",
    model: "Stratocaster",
  },
  {
    id: 01,
    name: "American Professional II Deluxe",
    description:
      "The American Professional II Telecaster® Deluxe draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today’s working player.",
    img: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0144513506_gtr_frt_001_rl.jpg",
    price: "1749.99",
    model: "Telecaster",
  },
  {
    id: 01,
    name: "Jim Root",
    description:
      "For heavy, molten nu-metal Tele® style, the Jim Root Telecaster delivers crushing detuned tone with a stark utilitarian look. ",
    img: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0114920345_gtr_frt_001_rr.jpg",
    price: "1449.99",
    model: "Telecaster",
  },
];

app.get("/guitar/find-guitar/:id", (req, res) => {
  const idParam = req.params.id;
  const chosenGuitar = guitar.find((guitar) => guitar.id == idParam);
  res.send(guitar);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
