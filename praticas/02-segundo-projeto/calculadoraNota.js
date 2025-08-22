// Montando uma acalculadora de notas 

// 40% da nota
function calculadoraA1(execicios, trabalho, prova){
    return execicios + trabalho + prova
}

// 60% da nota
function calculadoraA2(execicios, trabalho, prova){
    return execicios + trabalho + prova
}

// Nota final calculadora (notaA1 * 0,4) + (notaA2 * 0,6)

function calcularNotaFinal(notaA1, notaA2){
    return (notaA1 * 0.4) + (notaA2 * 0.6)
}

// exporta essas funcoes para serem utilizadas no index 

module.exports = {
    calculadoraA1,
    calculadoraA2,
    calcularNotaFinal
}