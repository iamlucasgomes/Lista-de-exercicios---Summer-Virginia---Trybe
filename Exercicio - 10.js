//	10. Crie uma função que receba como parâmetro uma array com várias idades diferentes. Depois imprima na tela quais são as que têm maior idade e quais são as que têm menor idade.

function  maiorEMenorIdade(idades){	//aqui criei uma função para receber as idades
  	
    var maiorIdade  = Math.max(...idades);	// criei a variável maiorIdade parra receber a maior idade usando o comando Math.max e o operador spread para copiar a sequencia da variável idades
    var menorIdade  = Math.min(...idades);	// criei a variável menorIdade parra receber a menor idade usando o comando Math.min e o operador spread para copiar a sequencia da variável idades
// sem o operador spread, as variáveis maior e menor idade retornam NaN
// aqui coloquei a variável resultado para receber as variáveis maiorIdade e menorIdade concatenando com uma string

    console.log("A  maior idade é:  " + maiorIdade	+	"	e	"	+	"a  menor idade é:  " + menorIdade); // como o enunciado pediu para imprimir os valores, eu usei o comando console.log e concatenei as variáveis com uma string para ter uma melhor resposta do resultado
}