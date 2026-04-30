var nome = "Link";
var vida = 3;
var moeda = 0;
var dano = 1;

function mostrarPersonagem(){
    document.getElementById("ficha").innerHTML = `
        <img src="images/icone.png" id="icone" alt="icone">
        <h1>🌟 ${nome} </h1>
        <p>❤️ ${vida} </p> 
        <p>🪙 ${moeda} </p> 
        <p>⚔️ ${dano} </p> 
    `;
}

document.getElementById("vida").addEventListener("click", addVida)
function addVida(){
    // if - verifica uma condição (se senão)
    // igualdade ==
    if(vida >= 20){
        alert("LIMITE DE VIDA MÁXIMA 20");
    }else{
        vida++;
    }
    mostrarPersonagem();
};

document.getElementById("moeda").addEventListener("click", addMoeda)
function addMoeda(){

    var quantMoedas = confirm("Deseja adicionar 1 ou personalizado(cancelar)?");

    if(quantMoedas){
        moeda++;
    }else{
        moeda = Number(prompt("Qual a quantidade de moedas?"))
    }
    mostrarPersonagem();
};

document.getElementById("dano").addEventListener("click", addDano)
function addDano(){
    var arma = prompt(`Qual arma o ${nome} está segurando? (MAISC)`).toUpperCase();
    // escolha(var)
    switch(arma){
        case "ESPADA":
            alert("Você selecionou espada! 5 dano");
            dano = 5;
            break;
        case "ARCO E FLECHA":
            alert("Você selecionou arco e flecha! 2 dano");
            dano = 2;
            break;
        default:
            alert("Arma não encontrada! Tente novamente!");
    }
    mostrarPersonagem();
};

mostrarPersonagem();