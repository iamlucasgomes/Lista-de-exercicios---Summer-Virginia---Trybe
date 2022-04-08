//	17. Escreva uma função que imprima os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.

function  ordemDecrescente(numeros){	//	criei uma função onde iremos colocar 1 parâmetro, que no caso é a array com a sequência númerica
    //usamos o mesmo método do exercício 16, só que dessa vez invertemos para um resultado em ordem decrescente
     numeros.sort((a,b)  =>  b	-	a);	// peguei a variável números e usei o método .sort , o .sort pegou os elementos da array e organizou em ordem decrescente e retornou para a array numeros
     
     return  numeros;	// usamos a declaração return para retornar a variável numeros quando usarmos a função
   }