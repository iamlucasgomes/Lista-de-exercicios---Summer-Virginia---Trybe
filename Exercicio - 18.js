//	18. Escreva uma função que receba como parâmetro um array contendo números positivos e números negativos e que retorne em novos arrays quais são os números positivos e quais são os negativos.

function  numerosPositivosENegativos(numeros){ // criei uma função que vai receber o parâmetro numeros
 
    var positivos = []; // criei 2 variáveis com array vazio, para receber os números positivos e os números negativos
    var negativos = [];	
    
    for(var indice  = 0;  indice <  numeros.length; indice++){ // usei uma estrutura de repetição para identificar todos os elementos da array numeros
      if(numeros[indice]  > 0){ // se o elemento da array numeros for maior que 0
        positivos.push(numeros[indice]); // ele vai ser adicionado a array positivos com o método .push
      } else  { // senão( se ele não se encaixar na alternativa acima) ele vai ser adicionado ao array negativos com o método .push
        negativos.push(numeros[indice]);
      }
    }
      return "Os números positivos são: " + positivos +"."  + " " + "Os números negativos são:  " + negativos +"."; // declarei com o return a concatenação de String com variáveis para apresentar uma melhor resposta do resultado
    } 