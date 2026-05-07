

function aula() {
    // variavel <- vetor de [1..3] de caractere
    var filmes = [
        "Interestelar",
        "Meninas Malvadas",
        "Diabo veste prada 2"
    ];

    console.log(filmes);
    console.log(filmes[1]);
    console.log("Um filme que está estourando é ", filmes[0])

    // push adiciona no ultimo
    filmes.push("As branquelas");
    console.log(filmes)

    // shift adiciona no primeiro
    filmes.unshift("Homem Aranha");
    console.log(filmes)

    // pop deleta o ultimo
    filmes.pop();
    console.log(filmes)

    // shift deleta o primeiro
    filmes.shift();
    console.log(filmes)

    // splice (indice, quantos quer sobrescrever , dados)
    filmes.splice(1, 1)
    console.log(filmes)

    filmes.splice(1, 1, "Diabo veste prada 1")
    console.log(filmes)

    filmes.splice(1, 0, "Kill Bill vol 1 E 2")
    console.log(filmes)

    var filmesCopia = filmes.slice();
    console.log(filmesCopia)

    for (var i = 0; i < filmes.length; i++) {
        console.log(filmes[i]);
    }

    filmes.map(cadaFilme => {
        console.log(cadaFilme);
    });
}


var doces = [
    ['PIRULITO', 'https://www.buildabirthday.co.nz/cdn/shop/files/RAINBOWJUMBO.jpg?v=1715031535', 20],

    ['SONHO DE VALSA', 'https://images.tcdn.com.br/img/img_prod/1225570/sonho_de_valsa_20g_unidade_1677_1_79762930ee3ce201b3e1f8574cf0ba1a.png', 5.99],

    ['TALENTO', 'https://destro.fbitsstatic.net/img/p/chocolate-talento-avelas-85g-80676/267231.jpg?w=500&h=500&v=202501231555&qs=ignore', 10.50]
];

doces.map(cadaDoce => {
    document.getElementById("produtos").innerHTML += `
    <div class="produto">
        <img src="${cadaDoce[1]}" alt="Pirulito">
        <h1>${cadaDoce[0]}</h1>
        <p>R$ ${cadaDoce[2]}</p>
        <button type="button">COMPRAR</button>
    </div>
    `
});