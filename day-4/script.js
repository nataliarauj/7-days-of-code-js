let secret_number = parseInt(Math.random() * 10 + 1);
console.log(secret_number)
let palpite = parseInt(prompt('Adivinhe o número secreto:'));
let tentativas = 1;

while (true){
    if(palpite == secret_number){
        alert(`Você acertou o número secreto ${secret_number}`);
        break;
    } else {
        alert('Você errou! Tente novamente');
        if (tentativas == 3){
            alert('Não foi dessa vez! Que pena.')
            break;
        }
    }
    palpite = parseInt(prompt('Adivinhe o número secreto:'));
    tentativas++;
}