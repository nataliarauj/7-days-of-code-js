let nome = document.querySelector('#name');
nome.innerHTML = prompt('Qual é o seu nome?');

let age = document.querySelector('#age');
age.innerHTML = parseInt(prompt('Qual é a sua idade?'));

let language = document.querySelector('#language');
language.innerHTML = prompt('Qual linguagem você está estudando?');

resposta = parseInt(prompt(`Você gosta de estudar ${language.innerHTML}? 1- SIM 2-NAO`));
let motivation = document.querySelector('#motivation');

if (resposta == 1) {
    motivation.innerHTML = 'Muito bom! Continue estudando e você terá muito sucesso.';
} else if (resposta == 2) {
    motivation.innerHTML = 'Ahh que pena!... Já tentou aprender outras linguagens?';
} else {
    motivation.innerHTML = 'Inválido! Insira 1 ou 2.';
}