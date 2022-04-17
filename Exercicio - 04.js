//	4. Crie uma função que, dada uma sequência de números, retorne qual é o menor entre eles.

/////////////////////// RESOLUÇÃO COM A FUNÇÃO MATH.MIN() ////////////////////////////

function menorNaSequencia(sequencia) {	//	criei a função para recebermos a sequencia numérica
  var resultado = Math.min(...sequencia);	//	criei a variável resultado para receber o menor numero da sequencia usando o comando Math.min, usei o operador spread para copiar a sequencia numérica

  return resultado;	//	usei o return para retornar o valor da variável resultado, quando usarmos a função
}

/////////////////////// RESOLUÇÃO COM ESTRUTURA DE REPETIÇÃO /////////////////////////

function menorNaSequencia(sequencia) {	//	criei a função para recebermos a sequencia numérica
  var resultado = sequencia[0]	// criei uma variável	e	nomeei	ela	com	o	nome	resultado,	e	atribuí	o	primeiro	elemento	da	sequencia	
  for (var i = 1; i < sequencia.length; i++) {	//	usei	a	estrutura	de	repetição	para	verificar	cada	elemento	da	sequencia	numérica, comecei	no	elemento	1	porque	na	variável	resultado	ja	começamos	com	o	valor	do	elemento	0
    if (sequencia[i] < resultado) {	//	usei	a	estrutura	condicional	com	a	condição,	se	o	elemento	da	sequencia	for	menor	que	a	variável	resultado
      resultado = sequencia[i] //	atribuímos	o	elemento	na	variável	resultado
    }
  } return resultado;	//	declarei	o	retorno	da	variável	resultado	quando	usarmos	a	função
}
