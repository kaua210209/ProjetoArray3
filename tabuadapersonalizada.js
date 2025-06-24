let prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Digite um numero entre 1 e 20:'))

if (numero >= 1 && numero <= 20 ) {
    console.log('Tabuada do ' + numero + ':\n' );
for(let i=0; i<=10; i++) {
console.log(numero + '*' + i +'=' + (numero*i));
}} else {
console.log('Numero invalido! Digite um numero entre 1 e 20:')
}