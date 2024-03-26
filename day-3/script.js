let area = parseInt(prompt('1-FRONT 2-BACK'));

if (area == 1){
    let framework = parseInt(prompt('1-REACT 2-VUE'));
    if (framework == 1) {
        alert('Você escolheu estudar React');
    } else if (framework == 2) {
        alert('Você escolheu estudar VUE')
    } else {
        alert('Insira uma opção válida!')
    }
    
} else if (area == 2){
    let linguagem = parseInt(prompt('1-JAVA 2-C#'));
    if (linguagem == 1) {
        alert('Você escolheu estudar Java');
    } else if (linguagem == 2) {
        alert('Você escolheu estudar C#')
    } else {
        alert('Insira uma opção válida!')
    }
}

let especializacao = parseInt(prompt('1-Especialização 2-Fullstack'));

if (especializacao == 1) {
    alert(`Boa escolha! Continue na sua especialização`);
} else if (especializacao == 2) {
    alert('Fullstack é uma ótima escolha!')
} else {
    alert('Insira uma opção válida!')
}

let tec = prompt('Quais tecnologias você gostaria de aprender?')

while (true) {
    let resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
    if (resposta !== 'ok') {
        break
    }
    let tec = prompt('Quais tecnologias você gostaria de aprender?')
}