const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()

app.use(express())

mongoose.connect('mongodb+srv://Alyson_viana:6mmF7hQKM4zheoMT@cluster0.typqjen.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

.then(() => {
    console.log("Conectado Com Sucesso")
})
.catch(err => {
    console.log("Erro ao conecta no mongodb", err)
})

app.listen(3000, () => {
    console.log("aplicação rodando em http://localhost:3000")
})