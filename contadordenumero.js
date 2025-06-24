let prompt = require('prompt-sync')();
let continuar = true;

while (continuar) {
  let pares = 0;
  let impares = 0;

  for (let i = 1; i <= 10; i++) {
    let entrada = prompt("Digite o " + i + "º número: ");

    if (entrada === null) {
      console.log("Entrada cancelada. Digite um número.");
      i--; 
      continue;
    }

    let numero = parseInt(entrada);

    if (!isNaN(numero)) {
      if (numero % 2 === 0) {
        pares++;
      } else {
        impares++;
      }
    } else {
      console.log("Valor inválido. Por favor, digite um número.");
      i--; 
    }
  }

  console.log("Você digitou " + pares + " número(s) par(es) e " + impares + " número(s) ímpar(es).");

  let opcoesValidas = ["s", "n"];
  let escolha = "";

  while (true) {
    escolha = prompt("Deseja continuar? (s para sim / n para não): ");

    if (escolha === null) {
      console.log("Entrada cancelada. Saindo do programa.");
      continuar = false;
      break;
    }

    escolha = escolha.toLowerCase();

    if (opcoesValidas.includes(escolha)) {
      continuar = (escolha === "s");
      break;
    } else {
      console.log("Opção inválida. Digite 's' para sim ou 'n' para não.");
    }
  }
}




