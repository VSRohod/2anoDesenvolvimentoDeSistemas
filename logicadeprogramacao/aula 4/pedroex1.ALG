Algoritmo "pedroex1"

Var
excesso , limite , multa , peso ,taxa: real

Inicio
limite <- 50
taxa <- 4

escreval("Qual é o peso?")
leia(peso)

se (peso > limite) entao
   excesso <- peso - limite
   multa <- excesso * 4
   escreval("A multa é de R$: ",multa)
   escreval("O excesso de peso foi ",
                               excesso)
senao
     escreval("Não há multa :)")
fimSe




Fimalgoritmo