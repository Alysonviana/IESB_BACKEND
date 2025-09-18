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
//GET /Pessoas/ id
router.get('/pessoas/:id', (req, res, next) => {
    //recebendo o ID como parametros dinamicos
    const id = req.parass.id
    const pessoas = listePessoas.find(pessoas => pessoas.id == id)
    if(pessoas){
        return res.status(404).json({error:"Pessoa não encontrada!!!"})
    }
    res.json(pessoas)
})
//exporta o roteador 
module.exports = router