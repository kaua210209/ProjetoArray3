let prompt = require('prompt-sync')();

function pedirNumero() {
  let numero;
  while (true) {
    console.log();
    console.log('===== TABUADA =====\n');
    numero = prompt('Digite o número da tabuada desejada: ');
    
  
    numero = parseFloat(numero);

    if (!isNaN(numero)) {
      console.log();
      return numero; 
    } else {
      console.log('\nValor inválido! Você não sabe o que é um numero?.\n');
    }
  }
}

function verificarSenha(senhaCorreta, maxTentativas) {
  let tentativas = 0;

  while (tentativas < maxTentativas) {
    let senha = prompt('Digite a senha: ');
    console.log();

    if (senha === senhaCorreta) {
      return true; 
    } else {
      tentativas++;
      console.log('Senha inválida! Tentativa ' + tentativas + ' de ' + maxTentativas);
      console.log();
    }
  }

  return false; 
}

function mostrarTabuada(numero) {
  console.log('Tabuada do:', numero);
  console.log();

  for (let i = 0; i <= 10; i++) {
    console.log(numero + ' * ' + i + ' = ' + (numero * i));
  }

  console.log('\n===== TABUADA =====\n');
}

function executarTabuada() {
  const senhaCorreta = "ganguedobabuino";
  const numero = pedirNumero();

  const acessoLiberado = verificarSenha(senhaCorreta, 3);

  if (acessoLiberado) {
    console.log('Acesso autorizado.\n');
    mostrarTabuada(numero);
  } else {
    console.log('Número máximo de tentativas excedido. Acesso bloqueado.\n');
  }
}


executarTabuada();
