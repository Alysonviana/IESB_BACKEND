require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/errorHandler');

// Import controllers
const DepartamentoController = require('./controllers/DepartamentoController');
const CargoController = require('./controllers/CargoController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProjetoController = require('./controllers/ProjetoController');
const TarefaController = require('./controllers/TarefaController');

const app = express();
app.use(express.json());

// Conectar ao MongoDB Atlas com variáveis de ambiente
mongoose.connect(
  `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}/${process.env.DBNAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('MongoDB conectado...'))
  .catch(err => console.error('Erro na conexão MongoDB:', err));

// Rotas para Departamento
app.post('/departamentos', DepartamentoController.create);
app.get('/departamentos', DepartamentoController.getAll);
app.get('/departamentos/:id', DepartamentoController.getById);
app.put('/departamentos/:id', DepartamentoController.update);
app.delete('/departamentos/:id', DepartamentoController.delete);

// Rotas para Cargo
app.post('/cargos', CargoController.create);
app.get('/cargos', CargoController.getAll);
app.get('/cargos/:id', CargoController.getById);
app.put('/cargos/:id', CargoController.update);
app.delete('/cargos/:id', CargoController.delete);

// Rotas para Funcionário
app.post('/funcionarios', FuncionarioController.create);
app.get('/funcionarios', FuncionarioController.getAll);
app.get('/funcionarios/:id', FuncionarioController.getById);
app.put('/funcionarios/:id', FuncionarioController.update);
app.delete('/funcionarios/:id', FuncionarioController.delete);

// Rotas para Projeto
app.post('/projetos', ProjetoController.create);
app.get('/projetos', ProjetoController.getAll);
app.get('/projetos/:id', ProjetoController.getById);
app.put('/projetos/:id', ProjetoController.update);
app.delete('/projetos/:id', ProjetoController.delete);

// Rotas para Tarefa
app.post('/tarefas', TarefaController.create);
app.get('/tarefas', TarefaController.getAll);
app.get('/tarefas/:id', TarefaController.getById);
app.put('/tarefas/:id', TarefaController.update);
app.delete('/tarefas/:id', TarefaController.delete);