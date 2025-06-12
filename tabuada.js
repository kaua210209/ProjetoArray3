prompt = require('prompt-sync')();
console.log()
console.log('===== TABUADA ===== \n')
let numero = parseFloat(prompt('Digite o número da tabuada desejada: '));
console.log()
let senha;
let tentativas = 0;
let senhaCorreta = "Senai123";

// Permite até 3 tentativas para digitar a senha corretamente
while (tentativas < 3) {
    senha = prompt('Digite a senha: ');
    console.log()
    if (senha === senhaCorreta) {
        console.log('Tabuada do: ', numero);
        console.log()
        for (let i = 0; i <= 10; i++) {
            console.log(numero + ' * ' + i + ' = ' + (numero * i));
        }
        break; // Sai do loop quando a senha estiver correta
    } else {
        tentativas++;
        console.log('Senha inválida! Tentativa ', tentativas + ' de 3 ');
    }
}
// Se exceder as tentativas, exibe mensagem de bloqueio
if (tentativas === 3) {
    console.log('Número máximo de tentativas excedido. Acesso bloqueado. ');
    console.log()
}
console.log('===== TABUADA ===== \n')