//	4. Crie uma função que, dada uma sequência de números, retorne qual é o menor entre eles.
 
function menorNaSequencia(sequencia){	//	criei a função para recebermos a sequencia numérica
    var resultado = Math.min(...sequencia);	//	criei a variável resultado para receber o menor numero da sequencia usando o comando Math.min, usei o operador spread para copiar a sequencia numérica
    
    return resultado;	//	usei o return para retornar o valor da variável resultado, quando usarmos a função
  }
  