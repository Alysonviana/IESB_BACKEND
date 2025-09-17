const express = require('express');
const app = express()

// configurar e mapear os intemediarios
const cors = require('cors')
app.use(cors()) // habilitar o CORS do brouser
app.use(express.json()) // receber Json no body da requisição

// mapear os meus routes
const pesssoasRouter = require('./routes/Pessoas')
app.use(pesssoasRouter)

// executar a aplicação 

app.listen(3000, () => {
    console.log("Aplicação rodando em https://localhost:3000")
})
