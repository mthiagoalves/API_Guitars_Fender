const express = require('express');
const cors = require('cors');
const app = express();
const route = require('./src/routes/route');

const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/guitars', route);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
