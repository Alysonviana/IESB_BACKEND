const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome:{type:String, required:true},
        descricao:{type:String, required:true},
        salario:{type:Number, required:true}
    }
)

const Cargomodel = mongoose.model('Cargos', schema)

module.exports = Cargomodel