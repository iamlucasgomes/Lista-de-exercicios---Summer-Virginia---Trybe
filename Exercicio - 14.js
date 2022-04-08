//	14. Crie uma função que receba como parâmetro um número e atribua na variável resultado se o número é positivo ou se o número for negativo.

function positivoOuNegativo(numero){	//	criei uma função que vai verificar se o número é positivo ou negativo com o parâmetro numero
    var resultado;	// criei a variável resultado vazia, para receber a resposta do nosso if/else
    
    if(numero < 0){ // usei o if(se) com a lógica, se numero for menor que 0
      resultado = "Esse numero  é negativo!" // a variável resultado recebe a String "Esse numero  é negativo!"
    } else  if(numero > 0){	//	usei o else if(senão se) com a lógica, senão se numero for maior que 0
      resultado = "Esse numero  é positivo!"// a variável resultado recebe a String "Esse numero  é positivo!"
    }	return  resultado;	//	usei a declaração return para retornar o resultado da variável resultado quando usarmos a função
  }