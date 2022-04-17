//	17. Escreva uma função que imprima os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.

/////////////////////// RESOLUÇÃO COM .SORT /////////////////////////

function  ordemDecrescente(numeros){	//	criei uma função onde iremos colocar 1 parâmetro, que no caso é a array com a sequência númerica
    //usamos o mesmo método do exercício 16, só que dessa vez invertemos para um resultado em ordem decrescente
     numeros.sort((a,b)  =>  b	-	a);	// peguei a variável números e usei o método .sort , o .sort pegou os elementos da array e organizou em ordem decrescente e retornou para a array numeros
     
     return  numeros;	// usamos a declaração return para retornar a variável numeros quando usarmos a função
   }

/////////////////////// RESOLUÇÃO COM ESTRUTURA DE REPETIÇÃO E .UNSHIFT /////////////////////////

   function  ordemDecrescente(numeros){	//	criei uma função onde iremos colocar 1 parâmetro, que no caso é a array com a sequência númerica
    var	decrescente	=	[]	//	criei uma variável com o nome decrescente e um array vazio
      for(var	i	=	0;	i	<	numeros.length;	i++){ //	usei a estrutura de repetição para verificar cada elemento do array numeros
        decrescente.unshift(numeros[i]) // usei o método .unshift para adicionar cada elemento do array números na array vazia da variável decrescente
      }
        
        return  decrescente.sort((a,b)  =>  b	-	a); // usamos a declaração return para retornar a variável numeros quando usarmos a função e o método .sort para organizar em ordem decrescente o resultado
      }

      /////////////////////// RESOLUÇÃO COM ESTRUTURA DE REPETIÇÃO /////////////////////////

      function  ordemDecrescente(numeros){	//	criei uma função onde iremos colocar 1 parâmetro, que no caso é a array com a sequência númerica
        var	decrescente	=	[]	//	criei uma variável com o nome decrescente e um array vazio
          for(var	i	=	numeros.length -1;	i	>=	0;	i--){ //	usei a estrutura de repetição para verificar cada elemento do array numeros de frente para trás
            decrescente.push(numeros[i]) // usei o método .push para adicionar cada elemento do array números na array vazia da variável decrescente
          }
            
            return  decrescente.sort((a,b)  =>  b	-	a); // usamos a declaração return para retornar a variável numeros quando usarmos a função e o método .sort para organizar em ordem decrescente o resultado
          }