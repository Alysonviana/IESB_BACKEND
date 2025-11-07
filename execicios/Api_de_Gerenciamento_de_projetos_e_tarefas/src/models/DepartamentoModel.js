const mongoose = require('mongoose');

const DepartamentoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Departamento', DepartamentoSchema);
