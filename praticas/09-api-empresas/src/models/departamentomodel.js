const mongoose= require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        descricao: {type: String, required: true}
    }
)

const departamentomodel = mongoose.model('departamento', schema)