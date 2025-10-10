const express = require('express')
const router = express.Router()

//mapear as logicas e a rotas

//lista de pessoas pra simular o banco de dados
let listePessoas = [
    {
        id : 1,
        nome: "joão",
        email: "joao@pedro.com",
        cpf: "00100100101",
        telefone:"6199990000",
        dataNacimento: "01/01/2000"
    },
    {
        id:2,
        nome: "Maria",
        email: "maria@jeans.com",
        cpf: "00200200202",
        telefone: "62999998888",
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
    const id = req.params.id
    const pessoas = listePessoas.find(pessoas => pessoas.id == id)
    if(!pessoas){
        return res.status(404).json({error:"Pessoa não encontrada!!!"})
    }
    res.json(pessoas)
})

//#criacao
// POST / pessoas
router.post('/pessoas', (req, res, next) =>{
    // Validando se todos os campos foram preenchidos
    const {nome, cpf, email, dataNacimento} = req.body
    if(!nome || !cpf || !email || !dataNacimento){
        return res.status(400).json({
            error: "NOME, Cpf, Email e DataNacimento São Obrigatorios!!!"
        })
    }
    //validar se o cpf ja foi cadastrado
    if(listePessoas.some(pessoa => pessoa.cpf == cpf)){
        return res.status(409).json({error: "CPF Ja Cadastrado!!!"})
    }

    const novaPessoa ={
        id: Date.new(),
        nome,
        cpf,
        email,
        dataNacimento
    }
    listePessoas.push(novaPessoa)
    res.status(201).json({message: "pessoa cadastrada com sucesso", novaPessoa})
})


// #Atualização
// PUT ou PATCH /pessoas/:id

router.put('/pessoa/:id', (req,res,next)=>{
    const id = req.params.id
    const pessoa = listePessoas.find(pessoa => pessoa.id == id )
    //validando se a pessoa existe
    if(!pessoa){
        return res.status(404).json({erro: "Pessoa não encontrada!!!"})
    }
    //Validando se os dados ora atualizar vienram na requisição 
    if(!nome || !email || !dataNacimento){
        return res.status(400).json({erro: "nome, email, dataNacimento sao Obrigatorios"})
    }
    //atualize os dados da pessoa
    pessoa.nome = nome
    pessoa.email = email
    pessoa.dataNacimento = dataNacimento
    // responder com os dados da pessoa atualizados
    res.json({message: "Pessoa atualisada com sucesso!!!"})
})


// #Remoção
// DELETE /pessoas/:id
router.delete('/pessoa/:id',(req,res,next)=>{
    const id = req.params.id
    //validar se a pessoa nao existe
    const pessoa = listePessoas.find(pessoa => pessoa.id == id)
    if(!pessoa){
        return res.status(404).json({error: "Pessoa nao encontrada!!!"})
    }
    listePessoas = listePessoas.filter(pessoa => pessoa.id == id)
    res.json({ message: "pessoa excluida com sucesso!!!"})
})

//exporta o roteador
module.exports = router