require('dotenv').config();
const express = require('express');
const errorHandler = require('./middlawares/errorHandler');


const DepartamentoController = require('./controllers/DepartamentoController');
const CargoController = require('./controllers/CargoController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProjetoController = require('./controllers/ProjetoController');
const TarefaController = require('./controllers/TarefaController');

const app = express();
app.use(express.json());


const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
)

.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Erro ao conectar MongoDB:', err));



app.post('/departamentos', DepartamentoController.create);
app.get('/departamentos', DepartamentoController.getAll);
app.get('/departamentos/:id', DepartamentoController.getById);
app.put('/departamentos/:id', DepartamentoController.update);
app.delete('/departamentos/:id', DepartamentoController.delete);


app.post('/cargos', CargoController.create);
app.get('/cargos', CargoController.getAll);
app.get('/cargos/:id', CargoController.getById);
app.put('/cargos/:id', CargoController.update);
app.delete('/cargos/:id', CargoController.delete);


app.post('/funcionarios', FuncionarioController.create);
app.get('/funcionarios', FuncionarioController.getAll);
app.get('/funcionarios/:id', FuncionarioController.getById);
app.put('/funcionarios/:id', FuncionarioController.update);
app.delete('/funcionarios/:id', FuncionarioController.delete);


app.post('/projetos', ProjetoController.create);
app.get('/projetos', ProjetoController.getAll);
app.get('/projetos/:id', ProjetoController.getById);
app.put('/projetos/:id', ProjetoController.update);
app.delete('/projetos/:id', ProjetoController.delete);


app.post('/tarefas', TarefaController.create);
app.get('/tarefas', TarefaController.getAll);
app.get('/tarefas/:id', TarefaController.getById);
app.put('/tarefas/:id', TarefaController.update);
app.delete('/tarefas/:id', TarefaController.delete);


app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});