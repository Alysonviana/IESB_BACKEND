const yup = require('yup');

const departamentoSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  descricao: yup.string().required('Descrição é obrigatória'),
});

module.exports = departamentoSchema;
