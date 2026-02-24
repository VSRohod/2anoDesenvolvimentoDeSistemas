Algoritmo "Abidas"

Var
opcao : inteiro
valorTotal : real
cancelado : logico

Inicio
   // parametro - nos parenteses
   // variavel - na memoria
   procedimento adicionarValor(valor :
                                     real)
   inicio
      limpaTela
      valorTotal <- valorTotal + valor
      escreval("VALOR DA COMPRA : R$ ",
                               valorTotal)
   fimProcedimento
   
   procedimento finalizar(status : caractere)
   inicio
      se (status = "cancelado") entao
          cancelado <- verdadeiro
      senao
         se (status = "comprar") entao
          cancelado <- falso
         fimSe
      fimSe
      
      se(cancelado)entao
        escreval("Pedido cancelado")
      senao
        escreval("VALOR FINAL R$ ",valorTotal)
      fimSe

      interrompa
   fimProcedimento

enquanto (verdadeiro) faca
   escreval("****************")
   escreval("*****ABIDAS*****")
   escreval("----------------")
   escreval("1) Tenis - R$ 150,00 ")
   escreval("2) Camiseta - R$ 350,00 ")
   escreval("3) Short - R$ 99,99 ")
   escreval("4) Blusa de frio - R$ 450,99")
   escreval("5) Conjunto - R$ 5000,50")
   escreval("6) FINALIZAR COMPRA")
   escreval("7) SAIR")
   leia(opcao)

   escolha(opcao)
      caso 1
        adicionarValor(150)
      caso 2
        adicionarValor(350)
      caso 3
        adicionarValor(99.99)
      caso 4
        adicionarValor(450.99)
      caso 5
        adicionarValor(5000.50)
      caso 6
        finalizar("comprar")
      caso 7
        finalizar("cancelado")
      outrocaso
        escreval("Erro! Opção inválida")
   fimEscolha
fimEnquanto


Fimalgoritmo