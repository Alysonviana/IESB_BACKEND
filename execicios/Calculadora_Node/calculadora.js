function somar(a, b) {
    return a + b;
  }
  
function subtrair(a, b) {
    return a - b;
  }
  
function multiplicar(a, b) {
    return a * b;
  }
  
function dividir(a, b) {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }
  
function aoQuadrado(a) {
    return a * a;
  }
  
function raizQuadrada(a) {
    if (a < 0) {
      throw new Error("Raiz quadrada de número negativo não é permitida.");
    }
    return Math.sqrt(a);
  }
  
module.exports = { somar, subtrair, multiplicar, dividir, aoQuadrado, raizQuadrada };