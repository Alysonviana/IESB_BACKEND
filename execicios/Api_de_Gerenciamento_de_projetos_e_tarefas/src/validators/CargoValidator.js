const yup = require('yup');

const cargoSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  descricao: yup.string().required('Descrição é obrigatória'),
  salario: yup.number().required('Salário é obrigatório').min(1518, 'Salário mínimo é R$ 1.518,00'),
});

module.exports = cargoSchema;
