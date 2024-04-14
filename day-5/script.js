var compras = {
    "frutas": [],
    "lactineos": [],    
    "verduras": [],
    "congelados": [],
    "doces": []
};

var resposta = prompt('Deseja adicionar algo a sua lista? (sim/nao)');

while (resposta.toLowerCase() === "sim") {
    let categoria = prompt("Qual categoria deseja adicionar? (frutas, latcineos, verduras, congelados, doces)");
    let comida = prompt('Adicione a comida:');

    if (compras.hasOwnProperty(categoria)) {
        compras[categoria].push(comida);
    } else {
        alert('Categoria inválida!')
    }
    resposta = prompt('Deseja adicionar algo a sua lista? (sim/nao)');
}

function formatar(compras){
    let texto = "";
    for (let categoria in compras) {
        texto += categoria + ": ";
        texto += compras[categoria].join(", ") + "\n";
    }
    return texto;
}

document.getElementById("compras").innerHTML = formatar(compras);
console.log(compras)