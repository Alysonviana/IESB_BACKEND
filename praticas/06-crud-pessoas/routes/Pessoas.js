const express = require('express')
const router = express.Router()

//mapear as logicas e a rotas

//lista de pessoas pra simular o banco de dados
let pessoas = [
    {
        id : 1,
        nome: "joão",
        cpf: "00100100101",
        email: "joao@pedro.com",
        dataNacimento: "01/01/2000"
    },
    {
        id:2,
        nome: "Maria",
        cpf: "00200200202",
        email: "maria@jeans.com",
        dataNacimento: "01/01/1999"
    },
]

//mapear rotas e logicas
//#Busca
//GET /Pessoas
router.get('/pessoas', (req, res, nest) => {
    res.json(listePessoas)
})
//exporta o roteador 
module.exports = router