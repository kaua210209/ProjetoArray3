const prompt = require('prompt-sync')();

let opcao;

do {
    console.log('\n=== MENU DE OPERAÇÕES ===');
    console.log('1 - Somar dois números');
    console.log('2 - Subtrair dois números');
    console.log('3 - Multiplicar dois números');
    console.log('4 - Dividir dois números');
    console.log('5 - Sair');

    opcao = parseInt(prompt('Escolha uma opção: '));

    switch (opcao) {
        case 1:
            let n1 = parseFloat(prompt('Digite o primeiro número: '));
            let n2 = parseFloat(prompt('Digite o segundo número: '));
            console.log(`Resultado da soma: ${n1 + n2}`);
            break;
        case 2:
            n1 = parseFloat(prompt('Digite o primeiro número: '));
            n2 = parseFloat(prompt('Digite o segundo número: '));
            console.log(`Resultado da subtração: ${n1 - n2}`);
            break;
        case 3:
            n1 = parseFloat(prompt('Digite o primeiro número: '));
            n2 = parseFloat(prompt('Digite o segundo número: '));
            console.log(`Resultado da multiplicação: ${n1 * n2}`);
            break;
        case 4:
            n1 = parseFloat(prompt('Digite o primeiro número: '));
            n2 = parseFloat(prompt('Digite o segundo número: '));
            if (n2 !== 0) {
                console.log(`Resultado da divisão: ${n1 / n2}`);
            } else {
                console.log('Erro: divisão por zero!');
            }
            break;
        case 5:
            console.log('Saindo do programa...');
            break;
        default:
            console.log('Opção inválida! Tente novamente.');
    }

} while (opcao !== 5);