//16. Escreva uma função que imprima os números de 1 (inclusive) a 10 (inclusive) em ordem crescente.

/////////////////////// RESOLUÇÃO COM .SORT /////////////////////////

function  ordemCrescente(numeros){	//	criei uma função onde iremos colocar 1 parâmetro, que no caso é a array com a sequência númerica
 
    numeros.sort((a,b)  =>  a - b); // peguei a variável números e usei o método .sort , o .sort pegou os elementos da array e organizou em ordem crescente e retornou para a array numeros
    
    return  numeros; // usamos a declaração return para retornar a variável numeros quando usarmos a função
  }
  
/////////////////////// RESOLUÇÃO COM ESTRUTURA DE REPETIÇÃO /////////////////////////

  function  ordemCrescente(numeros){	//	criei uma função onde iremos colocar 1 parâmetro, que no caso é a array com a sequência númerica
    var	crescente	=	[]	//	criei uma variável com o nome crescente e um array vazio
      for(var	i	=	0;	i	<	numeros.length;	i++){ //	usei a estrutura de repetição para verificar cada elemento do array numeros
        crescente.push(numeros[i]) // usei o método .push para adicionar cada elemento do array números na array vazia da variável crescente
      }
        
        return  crescente.sort((a,b)  =>  a - b); // usamos a declaração return para retornar a variável numeros quando usarmos a função e o método .sort para organizar em ordem crescente o resultado
      }