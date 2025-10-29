require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const livroRouter = require('./controllers/LivroController');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
)
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Erro ao conectar MongoDB:', err));

app.use('/api', livroRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
