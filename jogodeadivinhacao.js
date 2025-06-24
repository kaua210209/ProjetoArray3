let prompt = require('prompt-sync')();
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let chute;

while (true) {
  chute = parseInt(prompt("Adivinhe o número entre 1 e 100:"));

  if (isNaN(chute)) {
    console.log("Por favor, digite um número válido.");
    continue;
  }

  tentativas++;

  if (chute === numeroSecreto) {
    console.log("Parabéns! Você acertou o número em " + tentativas + " tentativa(s).");
    break;
  } else if (chute > numeroSecreto) {
    console.log("O número correto é menor.");
  } else {
    console.log("O número correto é maior.");
  }
}