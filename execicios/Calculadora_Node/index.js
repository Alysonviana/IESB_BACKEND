let prompt = require('prompt-sync')({sigint:true});

let { somar, subtrair, multiplicar, dividir, aoQuadrado, raizQuadrada} = require('./calculadora');

const operacao = prompt('Escolha a operação (somar, subtrair, multiplicar, dividir, aoQuadrado, raizQuadrada): ').toLowerCase();

let a, b, resultado;

switch (operacao) {
  case 'somar':
  case 'subtrair':
  case 'multiplicar':
  case 'dividir':
    a = parseFloat(prompt('Digite o primeiro número: '));
    b = parseFloat(prompt('Digite o segundo número: '));
    
    switch (operacao) {
      case 'somar':
        resultado = somar(a, b);
        break;
      case 'subtrair':
        resultado = subtrair(a, b);
        break;
      case 'multiplicar':
        resultado = multiplicar(a, b);
        break;
      case 'dividir':
        try {
          resultado = dividir(a, b);
        } catch (error) {
          console.log(error.message);
          break;
        }
        break;
    }

    if (resultado !== undefined) console.log(`Resultado: ${resultado}`);
    break;

  case 'aoquadrado':
    a = parseFloat(prompt('Digite o número: '));
    if (inten(a)) {
      console.log('Por favor, insira um número válido.');
      break;
    }
    resultado = aoQuadrado(a);
    console.log(`Resultado: ${resultado}`);
    break;

  case 'raizquadrada':
    a = parseFloat(prompt('Digite o número: '));
    if (inten(a)) {
      console.log('Por favor, insira um número válido.');
      break;
    }
    try {
      resultado = raizQuadrada(a);
      console.log(`Resultado: ${resultado}`);
    } catch (error) {
      console.log(error.message);
    }
    break;

  default:
    console.log('Operação não reconhecida.');
}