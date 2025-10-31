const express = require('express')

const router = express.Router()

const DepartamentoModel = require('../models/departamentomodel')
const {ValidarDepartamento, validarDerpatamento} = require('../validators/departamentoValidator')


router.get('/departamentos', async(req,res,next) => {
    const departamentos = DepartamentoModel.find()
    res.json(departamentos)
})

router.get('/departamentos/id', async(req,res,next) => { 
    const departamentosEncontrado = await DepartamentoModel.findByid(req.params.id)
    if(!departamentosEncontrado){
        return res.status(404).json({erro: "Não Encontrado"})
    }
    res.json(departamentosEncontrado)
})

router.post('/departamentos', validarDerpatamento, async(req,res,next)=>{
    const departamentoCriado = await DepartamentoModel.create(req.body)
    res.status(201).json(departamentoCriado)
})

router.put('/departamentos/:id', validarDerpatamento, async(req,res,next)=>{
    const departamentoAtualizado = await DepartamentoModel.findByidAndUpdate(req.params.id, req.body, {new: true})
    if(!departamentoAtualizado){
        return res.status(404).json({erro: "Não Encontrado"})
    }
})

router.delete('/departamentos/:id',async(req,res,next)=>{
    await DepartamentoModel.findByidDelete(req.params.id)
    res.status(204).send()
})

module.exports = router