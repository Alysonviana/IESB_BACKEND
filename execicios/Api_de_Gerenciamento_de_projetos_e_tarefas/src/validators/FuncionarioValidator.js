const yup = require('yup');

const enderecoSchema = yup.object().shape({
  cep: yup.string(),
  logradouro: yup.string(),
  numero: yup.string(),
  complemento: yup.string(),
  bairro: yup.string(),
  cidade: yup.string(),
  uf: yup.string(),
});

const funcionarioSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  email: yup.string().required('Email é obrigatório').email('Email inválido'),
  telefone: yup.string().required('Telefone é obrigatório'),
  dataContratacao: yup.date().required('Data de contratação é obrigatória'),
  dataNascimento: yup.date().required('Data de nascimento é obrigatória'),
  genero: yup.string().required('Gênero é obrigatório'),
  endereco: enderecoSchema,
  cargo: yup.string().required('Cargo é obrigatório'),
  departamento: yup.string().required('Departamento é obrigatório'),
});

module.exports = funcionarioSchema;
