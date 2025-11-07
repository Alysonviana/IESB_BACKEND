const yup = require('yup');

const tarefaSchema = yup.object().shape({
  titulo: yup.string().required('Título é obrigatório'),
  descricao: yup.string().required('Descrição é obrigatória'),
  dataInicio: yup.date().required('Data de início é obrigatória'),
  dataFim: yup.date().required('Data de fim é obrigatória').min(
    yup.ref('dataInicio'),
    'Data de fim deve ser posterior à data de início'
  ),
  responsavel: yup.string().required('Responsável é obrigatório'),
  projeto: yup.string().required('Projeto é obrigatório'),
});

module.exports = tarefaSchema;
