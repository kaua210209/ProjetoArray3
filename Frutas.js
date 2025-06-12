let prompt = require('prompt-sync')();
let frutas = ['laranja', 'uva', 'banana', 'pêra', 'maça']; 
let quantidade = (prompt('Digite a quantidade de frutas: '));

for(i=0; i<quantidade; i++)
{
    let novasFrutas = (prompt('Digite a nova fruta: ' + ' ' + ' ' + (i+1)));
    frutas.push(novasFrutas);
}
for(i=0; i<=frutas.length; i++)
{
    console.log('A posição do array ' + i + ' eh: ' + [frutas[i]])
}