const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

const app = express()
app.use(express.json())

mongoose.connect(url)

    .then(() => {
        console.log("Conectado Com Sucesso!!!")
    })
    .catch(err => {
        console.log("Erro ao conecta no mongodb!!", err)
    })

const LivroModel = mongoose.model('livros', new mongoose.Schema({
    titulo: String,
    autor: String,
    editora: String,
    ano: Number,
    preco: Number,
}))

// Criar um livro
app.post('/livros', async (req, res) => {
    const livro = req.body
    if (!livro.titulo) {
        return res.status(400).json({ error: 'Título é obrigatório' })
    }

    const livroCriado = await LivroModel.create(livro)
    res.status(201).json(livroCriado)
})

// Listar todos os livros
app.get('/livros', async (req, res) => {
    const livros = await LivroModel.find()
    res.json(livros)
})

// Buscar e atualizar um livro pelo ID
app.get('/livros/:id', async (req, res) => {
    const id = req.params.id
    const livroAtualizar = req.body
    if (!livroAtualizar.titulo) {
        return res.status(400).json({ error: 'Título é obrigatório' })
    }

    const livroAtualizado = await LivroModel.findByIdAndUpdate(id, livroAtualizar, { new: true })
    if (!livroAtualizado) {
        return res.status(404).json({ error: 'Livro não encontrado' })
    }
    res.json(livroAtualizado)
})

// Remover um livro pelo ID
app.delete('/livros/:id', async (req, res) => {
    const id = req.params.id
    await LivroModel.findByIdAndDelete(id)
    res.json({ message: 'Livro removido com sucesso!' })
})



app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})