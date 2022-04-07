//	7. Crie uma função que receba 2 números e retorne a multiplicação e divisão entre eles.

function  multiplicacaoEDivisao(numero1,numero2,operador){ // criei uma função que vai receber 3 parâmetros

    var resultado; // criei a variável resultado, onde iremos atribuir o resultado do nosso if/else
    
        if(operador === "*"){ // aqui usamos o if(se) para comparar se operador é igual a *
   resultado  = numero1 * numero2 // sendo a informação verdadeira, atribuimos a variável resultado a multiplicação de numero1*numero2
    }	if(operador === "/"){	// aqui usamos o if(se) para comparar se operador é igual a /
      resultado = numero1 / numero2	// sendo a informação verdadeira, atribuimos a variável resultado a divisão de numero1/numero2
    }
      return resultado; // aqui usamos o comando return para retornar a variável resultado quando usarmos a função
  } 
      