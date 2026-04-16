// resposta no console
console.log("Olá mundo!");

// caixas de dialogo
// alert("FRONT É MATERIA MAIS TOP");
// prompt("Qual é o seu nome?");
// confirm("Você faria um pix para seu colega?");

// acessa documento, busca o elemento com o id selecionado
// inner = dentro
document.getElementById("resposta").innerText = "<h1>QUE LEGAL</h1>";
document.getElementById("resposta").innerHTML = "<h1>QUE LEGAL</h1>";

// string - caractere ( "Victor" )
var nome = "Victor";

// boolean - logico ( 'verdadeiro' - true, 'falso' - false )
var ligado = true;

// number - número ( 80 ) 
// *obs para numeros quebrados - float()
// *obs para numeros inteiros - int()
var idade = 23;
var dinheiro = 108.50;

// array - lista , vetor
var listaCompras = []
console.log(typeof(nome));
console.log(typeof(ligado));
console.log(typeof(idade));
console.log(typeof(dinheiro));
console.log(typeof(listaCompras));