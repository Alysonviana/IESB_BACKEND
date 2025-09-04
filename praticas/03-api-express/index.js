// importe o express
const express = require('express')

// crie uma instancia(express) da minha aplicação
const app = express()

// guarda o numero da porta que vai ser alocada
const porta = 3000

// middwares (intermediario)
app.use((req, res , next) => {
    console.log("time:", new Date().telocalestrimg())
    console.log("METODO:", req.method)
    console.log('ROTA: ', req.url)
    next()
})

// metodo oa arota 
// req > dados da requisição
// res > manipulado da resposta 
// next > chamada do proximo middwares

app.get('/teste', (req, res , next) => {
    res.send("TEXTE TESTANDO 123!!!")
})


//Execute a aplicação escolhendo a porta
app.listen(porta, () => {
    // imprimindo uma mensagem pra configura a aplição que esta funcionando(rodando na porta escolhida)
    console.log("Aplicação rodando em http://localhost.3000")
})

