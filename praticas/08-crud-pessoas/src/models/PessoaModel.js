const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  // estrutura da pessoa
  {
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String },
    dataNascimento: { type: Date, required: true },
    genero: { type: String, required: true },
    endereco: {
      cep: String,
      logradouro: String,
      complemento: String,
      bairro: String,
      numero: String,
      uf: String
    },
  },
  // parametros
  // salva data de criação e a data de atualização do registro
  { timestamps: true }
)

// modelo
const PessoaModel = mongoose.model('Pessoas', schema)

module.exports = PessoaModel
