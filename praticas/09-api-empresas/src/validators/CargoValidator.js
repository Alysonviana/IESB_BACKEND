const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup.string().required('O campo nome e Obrigatorio!!!'),
        descricao: yup.string().required('O campo descrição e Obrigatorio!!!'),
        salario: yup.number().min(1518.00, "Salario não pode ser abaixo do minimo 1518,00").required("O campo salario e obrigatorio!!!")
    }
)

async function validarCargo(req, res, next) {
    try{
        await schema.validate(req.body, {abortEarly: false})
        next()
    } catch(error){
        return res.status(400).json({erro: error.errors})
    }
}

module.exports = {
    validarCargo
}