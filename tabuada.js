let numero = require('prompt-sync')();
console.log()
console.log('=== TABUADO 1 ao 10 === \n')

numero = parseInt(numero('Digite um numero (1 ao 10):'));

for(let i=1; i<=10; i++)
{
    console.log(numero + ' * ' + i + ' = ' + (numero * i))
}
console.log('====== ======')