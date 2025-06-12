let prompt = require('prompt-sync')();
let numeros = [10,15,20,25,30,35,40]; 
let quantidade = parseFloat(prompt('Digite a quantidade de número: '));

// numeros.push(novo);

for(i=0; i<quantidade; i++)
{
    let novoNumero = parseFloat(prompt('Digite o novo número: ' + (i+1)));
    numeros.push(novoNumero);
}
for(i=0; i<=numeros.length; i++)
{
    console.log('A posição do array ' + i + ' eh: ' + [numeros[i]])
}