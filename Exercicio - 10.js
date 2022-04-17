//	10. Crie uma função que receba como parâmetro uma array com várias idades diferentes. Depois imprima na tela quais são as que têm maior idade e quais são as que têm menor idade.

/////////////////////// RESOLUÇÃO COM A FUNÇÃO MATH.MAX()   &&  MATH.MIN() /////////////////////////////

function  maiorEMenorIdade(idades){	//aqui criei uma função para receber as idades
  	
    var maiorIdade  = Math.max(...idades);	// criei a variável maiorIdade parra receber a maior idade usando o comando Math.max e o operador spread para copiar a sequencia da variável idades
    var menorIdade  = Math.min(...idades);	// criei a variável menorIdade parra receber a menor idade usando o comando Math.min e o operador spread para copiar a sequencia da variável idades
// sem o operador spread, as variáveis maior e menor idade retornam NaN
// aqui coloquei a variável resultado para receber as variáveis maiorIdade e menorIdade concatenando com uma string

    console.log("A  maior idade é:  " + maiorIdade	+	"	e	"	+	"a  menor idade é:  " + menorIdade); // como o enunciado pediu para imprimir os valores, eu usei o comando console.log e concatenei as variáveis com uma string para ter uma melhor resposta do resultado
}



/////////////////////// RESOLUÇÃO COM ESTRUTURA DE REPETIÇÃO /////////////////////////

function  maiorEMenorIdade(idades){	//	aqui criei uma função	com 1 parâmetro para receber as idades

    var maiorIdade	=	idades[0];	//	criei duas	variáveis	onde	iremos	atribuir	a	maior	e	menor	idade	da	array
    var	menorIdade	=	idades[0];
    
    for(var	contador	=	1;	contador	<	idades.length;	contador++){	//	usei	a	estrutura	de	repetição	para	verificar	cada	elemento	do	array	idades	a	partir	do	indice	1
      if(idades[contador] > maiorIdade){	//	e	usando	a	estrutura	condicional	para	verificar	se	cada	elemento	da	variável	idades	é	maior	que	a	variável	maiorIdade
        maiorIdade	=	idades[contador];	//	se	a	resposta	for	true,	atribuímos	o	resultado	na	variável	maiorIdade
      }	else	if	(idades[contador]	<	menorIdade){	//	senão	se	cada	elemento	da	variável	idades	for	menor	que	menorIdade
        menorIdade	=	idades[contador];	//	atribuímos	esse	elemento	na	variável	menorIdade
      }
    }    console.log("A  maior idade é:  " + maiorIdade	+	"	e	"	+	"a  menor idade é:  " + menorIdade); // como o enunciado pediu para imprimir os valores, eu usei o comando console.log e concatenei as variáveis com uma string para ter uma melhor resposta do resultado
  }