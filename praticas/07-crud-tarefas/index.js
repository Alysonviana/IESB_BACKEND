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

const TarefaModel = mongoose.model('tarefas', new mongoose.Schema(
    {
       nome: String
    }
))

app.post('/tarefas', async (req, res) => {
    const tarefa = req.body;
    if(!tarefa.nome) {
        return res.status(400).json({ error: 'Nome é Obrigatorio'})
    }
    const tarefaCriada = await TarefaModel.create(tarefa)
    res.status(200).json(tarefaCriada)
})

app.get('/tarefas', async (req, res) =>{
    const tarefas = await TarefaModel.find()
    res.json(tarefas)
})

app.get('/tarefas:id', async (req, res) => {
    const id = req.params;
    const tarefa = req.body;
    if(!tarefa.nome){
        return res.status(400).json({error : 'Nome é Obrigatorio'});
    }
    const tarefaAtualizada = await TarefaModel.findByIdAndUpdate(id, tareda, {new: true})

    if(!tarefaAtualizada){
        return res.status(404).json({error : 'Tarefa não Encontrada'})
    }
    res.json(tarefaAtualizada)
})

app.delete('/tarefas:id', async (req, res) =>{
    const id = req.params.id
    await TarefaModel.findByIdAndDelete(id)
    res.json({message : 'Tarefas deletadas com Sucesso!!'})
})

app.listen(3000, () => {
    console.log("aplicação rodando em http://localhost:3000")
})