Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/02/2026
Var
i : inteiro
nome : vetor[1..3] de caractere
valorMercadoria  : vetor[1..3] de real
valorTotal, media : real

Inicio
para i <- 1 ate 3 faca
     escreval("Digite o nome da mercadoria")
     leia(nome[i])
     escreval("Digite o valor da mercadoria")
     leia(valorMercadoria[i])
     limpaTela
fimPara
valorTotal <- valorMercadoria[1] + valorMercadoria[2] +  valorMercadoria[3]
media <- valorTotal / 3

escreval("O valor total é R$ ",valorTotal)
escreval("O valor da media é R$ ",media)


Fimalgoritmo