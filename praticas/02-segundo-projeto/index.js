// importando lib prompt-sync
let prompt = require('prompt-sync')({sigint:true});
// usara lib do prompt-sync
let nome = prompt("Qual seu nome:");
//usando o nome capturado pelo prompt
console.log(`Ola ${nome}.`);
// importando o modulo calculadoraNota
let {calculadoraA1,calculadoraA2,calcularNotaFinal} = require('./calculadoraNota');

// perguntando pro usuario a nota de execicios, trabalho e prova
let execiciosA1 = parseFloat(prompt("Qual a nota do execicios A1: "))
let trabalhoA1 = parseFloat(prompt("Qual a nota do trabalhor A1: "))
let provaA1 = parseFloat(prompt("Qual a nota da prova A1: "))
let notaA1 = calculadoraA1(execiciosA1,trabalhoA1,provaA1)


console.log("### Calculo da NOTA A1 ###");
console.log("Nota Execicios A1: ", execiciosA1)
console.log("Nota Trabalhor A1: ", trabalhoA1)
console.log("Nota Prova A1: ", provaA1)
console.log("Nota A1 CALCULADA: ", notaA1)


// perguntando pro usuario a nota de execicios, trabalho e prova
let execiciosA2 = parseFloat(prompt("Qual a nota do execicios A2: "))
let trabalhoA2 = parseFloat(prompt("Qual a nota do trabalhor A2: "))
let provaA2 = parseFloat(prompt("Qual a nota da prova A2: "))
let notaA2 = calculadoraA2(execiciosA1,trabalhoA1,provaA1)


console.log("### Calculo da NOTA A2 ###");
console.log("Nota Execicios A2: ", execiciosA2)
console.log("Nota Trabalhor A2: ", trabalhoA2)
console.log("Nota Prova A2: ", provaA2)
console.log("Nota A1 CALCULADA: ", notaA2)

let notaFinal = calcularNotaFinal(notaA1, notaA2);

console.log("### CALCULO DA NOTA FINAL ###")
console.log("Nota Final: ", notaFinal);

if (notaFinal >= 5){
    console.log(`Parabens ${nome}, voce foi Aprovado(a)!!!`)
} else{
    console.log(`${nome} estude mais, infelismente voce foi Reprovado(a)!!!`)
}
