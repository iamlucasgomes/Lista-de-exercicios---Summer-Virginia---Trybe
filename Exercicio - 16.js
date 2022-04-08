//16. Escreva uma função que imprima os números de 1 (inclusive) a 10 (inclusive) em ordem crescente.

function  ordemCrescente(numeros){	//	criei uma função onde iremos colocar 1 parâmetro, que no caso é a array com a sequência númerica
 
    numeros.sort((a,b)  =>  a - b); // peguei a variável números e usei o método .sort , o .sort pegou os elementos da array e organizou em ordem crescente e retornou para a array numeros
    
    return  numeros; // usamos a declaração return para retornar a variável numeros quando usarmos a função
  }
  