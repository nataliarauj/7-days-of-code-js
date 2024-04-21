var operacao = prompt('Operação: \n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n5. Sair');

while(operacao !== 5){
    if (operacao == 1){
        valores();
        alert('O resultado da soma é: ' + soma(n1, n2));
    } else if (operacao == 2){
        valores();
        alert('O resultado da subtração é: ' +subtracao(n1, n2));
    } else if (operacao == 3){
        valores();
        alert('O resultado da multiplicação é: ' +multiplicacao(n1, n2));
    } else if (operacao == 4) {
        valores();
        alert('O resultado da divisão é: ' +divisao(n1,  n2));
    } else if (operacao == 5) {
        alert('Até breve.');
        break; 
    } else {
        alert('Operação inválida. Digite novamente.')
    }

    operacao = prompt('Operação: \n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n5. Sair');
}

function valores(){
    n1 = parseInt(prompt('Primeiro número'));
    n2 = parseInt(prompt('Segundo número'));
    return n1, n2;
}

function soma(n1, n2){
    return n1 + n2;
}

function subtracao(n1, n2){
    return n1 - n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function divisao(n1, n2){
    return n1/n2;
}