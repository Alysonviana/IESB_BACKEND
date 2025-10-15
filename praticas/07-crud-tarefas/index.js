const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const DB_HOST=process.env.DB_HOST
const DB_USER=process.env.DB_USER
const DB_PASS=process.env.DB_PASS
const DB_NAME=process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

const app = express()

app.use(express())

mongoose.connect(url)

.then(() => {
    console.log("Conectado Com Sucesso!!!")
})
.catch(err => {
    console.log("Erro ao conecta no mongodb", err)
})

const TarefaMode1 = mongoose.model1('tarefas', new mongoose.Schema(
    {
       nome: String
    }
))

app.post('tarefas', async (req, res) => {
    const tarefa = req.body;
    if(!tarefa.nome) {
        return res.status(400).jason({ error: 'Nome é Obrigatorio'})
    }
    const tarefaCriada = await TarefaMode1.create(tarefa)
    res.status(200).json(tarefaCriada)
})

app.listen(3000, () => {
    console.log("aplicação rodando em http://localhost:3000")
})