const express = require('express')

const router = express.Router()

const CargoModel = require('../models/Cargomodel')
const  ValidarCargo = require('../validators/CargoValidator')


router.get('/Cargos', async(req,res,next) => {
    const Cargo = CargoModel.find()
    res.json(Cargo)
})

router.get('/Cargo/id', async(req,res,next) => { 
    const CargoEncontrado = await CargoModel.findByid(req.params.id)
    if(!CargoEncontrado){
        return res.status(404).json({erro: "Não Encontrado"})
    }
    res.json(CargoEncontrado)
})

router.post('/Cargo', ValidarCargo, async(req,res,next)=>{
    const CargoCriado = await CargoModel.create(req.body)
    res.status(201).json(CargoCriado)
})

router.put('/Cargo/:id', ValidarCargo, async(req,res,next)=>{
    const CargoAtualizado = await CargoModel.findByidAndUpdate(req.params.id, req.body, {new: true})
    if(!CargoAtualizado){
        return res.status(404).json({erro: "Não Encontrado"})
    }
})

router.delete('/Cargo/:id',async(req,res,next)=>{
    await CargoModel.findByidDelete(req.params.id)
    res.status(204).send()
})

module.exports = router