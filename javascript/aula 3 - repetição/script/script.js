function aula(){
    // enquanto () faca ...
    // para con ate con2 interable
    var i = 0;

    while (i < 10) {
        console.log(i);
        i++
    }

    while (false) {
        var pergunta = confirm("Repete? ");

        if (pergunta == false) {
            break;
        }
    }

    for(var i;i<2000;i++){
        document.querySelector('main').innerHTML += `
          <p>  SOU TOP EM PROGRAMAÇÃO </p>
          <p>  VOU FAZER UM PIX PARA O PROFESSOR </p>
        `;
    }

    // faz e verifica (aceita false)
    do{
        console.log(i);
        i++
    }while(i<10);
}

function produtos(){
    for(var i = 0;i<10;i++){
        document.getElementById("produtos").innerHTML += `
        <div class="produto">
                <img src="https://www.buildabirthday.co.nz/cdn/shop/files/RAINBOWJUMBO.jpg?v=1715031535" alt="Pirulito">
                <h1>PIRULITO</h1>
                <p>R$ 20</p>
                <button type="button">COMPRAR</button>
            </div>
        `;
    }
}

produtos();