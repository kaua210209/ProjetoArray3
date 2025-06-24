let prompt = require('prompt-sync')();


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
    console.log('Não é possível dividir por zero.');
    return null;
  }
  return a / b;
}


function calculadora() {
  console.log();
  console.log('=== Calculadora Simples ===\n');
  console.log('Escolha a Operação:');
  console.log('Soma => (1)');
  console.log('Subtração => (2)');
  console.log('Multiplicação => (3)');
  console.log('Divisão => (4)');
  console.log('\n=== Calculadora Simples ===\n');

  let operacao = prompt('Digite a operação desejada (1 a 4): ');
  console.log();

  console.log('Operação escolhida:', operacao);
  console.log();

  let numero1 = parseFloat(prompt('Digite o primeiro número: '));
  let numero2 = parseFloat(prompt('Digite o segundo número: '));
  console.log();

  if (isNaN(numero1) || isNaN(numero2)) {
    console.log('Número digitado inválido. Tente novamente!');
    return;
  }

  let resultado;

  switch (operacao) {
    case '1':
      resultado = somar(numero1, numero2);
      console.log('O resultado da soma é:', resultado);
      break;

    case '2':
      resultado = subtrair(numero1, numero2);
      console.log('O resultado da subtração é:', resultado);
      break;

    case '3':
      resultado = multiplicar(numero1, numero2);
      console.log('O resultado da multiplicação é:', resultado);
      break;

    case '4':
      resultado = dividir(numero1, numero2);
      if (resultado !== null) {
        console.log('O resultado da divisão é:', resultado);
      }
      break;

    default:
      console.log('Erro! Operação inválida.');
  }
}

calculadora();

