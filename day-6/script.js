var compras = {
    "frutas": [],
    "laticineos": [],    
    "verduras": [],
    "congelados": [],
    "doces": []
};

var resposta = prompt('Deseja adicionar algo a sua lista? (sim/nao) ou deseja remover algo? (remover)');

while (resposta.toLowerCase() === "sim") {
    var categoria = prompt("Qual categoria deseja adicionar? (frutas, laticineos, verduras, congelados, doces)");
    var comida = prompt('Adicione o alimento:');

    if (compras.hasOwnProperty(categoria)) {
        compras[categoria].push(comida);
    } else {
        alert('Categoria inválida!');
    }
    resposta = prompt('Deseja adicionar algo a sua lista? (sim/nao) ou deseja remover algo? (remover)');
}

while (resposta.toLowerCase() === "remover") {
    var categorias_lista = true;
    for (var categorias in compras) {
        if (compras[categorias].length !== 0) {
            categorias_lista = false;
            break; 
        }
    }

    if (categorias_lista) {
        alert("Todas as categorias estão vazias.");
    } else {
        alert(formatar(compras));
        let excluir = prompt('Qual alimento deseja remover?');
        let indice = compras[categoria].indexOf(excluir);
    
        if (indice !== -1) { 
            compras[categoria].splice(indice, 1); 
            alert("Item removido com sucesso.");
        } else {
            alert("O item não foi encontrado na lista de " + categoria);
        }
    }
    resposta = prompt('Deseja adicionar algo a sua lista? (sim/nao) ou deseja remover algo? (remover)'); 
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