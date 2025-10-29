const yup = require('yup');

const criarLivroSchema = yup.object().shape({
  titulo: yup.string().required('Título é obrigatório'),
  autor: yup.string().required('Autor é obrigatório'),
  editora: yup.string().required('Editora é obrigatória'),
  ano: yup.number().required('Ano é obrigatório').typeError('Ano deve ser um número'),
  preco: yup.number().required('Preço é obrigatório').positive('Preço deve ser positivo').typeError('Preço deve ser um número')
});

const atualizarLivroSchema = yup.object().shape({
  titulo: yup.string(),
  autor: yup.string(),
  editora: yup.string(),
  ano: yup.number().typeError('Ano deve ser um número'),
  preco: yup.number().positive('Preço deve ser positivo').typeError('Preço deve ser um número')
});

function validarSchema(schema) {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (err) {
      const errors = err.errors;
      res.status(400).json({ errors });
    }
  };
}

const validarCriarLivro = validarSchema(criarLivroSchema);
const validarAtualizarLivro = validarSchema(atualizarLivroSchema);

module.exports = { validarCriarLivro, validarAtualizarLivro };
