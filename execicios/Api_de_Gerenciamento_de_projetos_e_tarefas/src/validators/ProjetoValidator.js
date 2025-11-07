const yup = require('yup');

const projetoSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  descricao: yup.string().required('Descrição é obrigatória'),
  dataInicio: yup.date().required('Data de início é obrigatória'),
  dataFim: yup.date().required('Data de fim é obrigatória').min(
    yup.ref('dataInicio'),
    'Data de fim deve ser posterior à data de início'
  ),
});

module.exports = projetoSchema;
