let prompt = require('prompt-sync')();
let senha;
let tentativas = 0;
let senhaCorreta = "Senai123";

while (tentativas < 3) {
  senha = prompt('Digite a senha: ');

  if (senha === senhaCorreta) {
    console.log(' Bem-vindo!!! ');
    break; // Sai do loop se a senha estiver correta
  } else {
    tentativas++;
    console.log('Senha inválida! Tentativa ' + tentativas + ' de 3');
  }
}

if (tentativas === 3) {
  console.log('Número máximo de tentativas excedido. Acesso bloqueado.');
}





