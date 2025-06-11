let prompt = require('prompt-sync')();

console.log()
console.log('=== Calculadora Simples ===\n');
console.log('Escolha a Operacao: \n');
console.log('Soma => (1)');
console.log('Subtracao => (2)');
console.log('Multiplicacao => (3)');
console.log('Divisao => (4)\n');
console.log('=== Calculadora Simples ===\n');

//Armazena a operação desejada
let operacao = prompt('Digite a operação desejada: (1 a 4): ');
console.log()

//Solicita a operação desejada
console.log('Escolha a operacao desejada: ', operacao)
console.log()

//solicitação dos valores
let numero1 = parseInt(prompt('Digite o primeiro número: '));
let numero2 = parseInt(prompt('Digite o segundo número: '));
console.log()

let resultado

if (isNaN(numero1) || isNaN(numero2)){
    console.log('Número digitado invalido, tente novamente!')
} else {
//calculo da operação desejada
if (operacao === '1'){
    resultado = (numero1 + numero2);
    console.log('O resultado da soma eh: ', resultado);
}else if (operacao === '2'){
    resultado = (numero1 - numero2);
    console.log('O resultado da subtração eh: ', resultado);
}else if(operacao === '3'){
    resultado = (numero1 * numero2);
    console.log('O resultado da mutiplicação eh: ', resultado);
}else if (operacao === '4'){
    if ( numero2 !== 0){
        console.log('Não é possível dividir por zero')
    }else{
        resultado = numero1/numero2;
                console.log('O resultado da divisão eh: ', resultado)
            }
    } else {
        console.log('ERRO! Operação invalida.');
    }
}