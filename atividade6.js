let numero = require('prompt-sync')();
numero = parseInt(numero('Digite um número: '));

for(let i=1; i<=10; i++)
{
    console.log(numero + ' * ' + i + ' = ' + (numero * i))
}