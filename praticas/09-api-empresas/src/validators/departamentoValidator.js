const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup.string().required('O campo nome e Obrigatorio!!!'),
        descricao: yup.string().required('O campo descrição e Obrigatorio!!!')
    }
)

async function validarDerpatamento(req, res, next) {
    try{
        await schema.validate(req.body, {abortEarly: false})
        next()
    } catch(error){
        return res.status(400).json({erro: error.errors})
    }
}

module.exports = {
    validarDerpatamento
}