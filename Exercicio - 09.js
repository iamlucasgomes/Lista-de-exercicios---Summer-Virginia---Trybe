//9. Crie uma função que receba como parâmetro um array de números inteiros e que retorne APENAS o maior número dentre os informados.

/////////////////////// RESOLUÇÃO COM A FUNÇÃO MATH.MAX() /////////////////////////////

function maiorNumero(numeros) { // criei uma função que recebeu o nome MaiorNumero e o parâmetro numeros
  var resultado = Math.max(...numeros) //	aqui criamos a variável resultado e atribuímos o comando Math.max a ela para saber qual é o maior número, usamos o operador spread para copiarmos a sequência da variável números, sem ele nossa função retorna NaN
  return resultado; // usei aqui o comando return para retornar a variável resultado quando usarmos nossa função
}

/////////////////////// RESOLUÇÃO COM ESTRUTURA DE REPETIÇÃO /////////////////////////

function maiorNaSequencia(sequencia) {	//	criei a função para recebermos a sequencia numérica
  var resultado = sequencia[0]	// criei uma variável	e	nomeei	ela	com	o	nome	resultado,	e	atribuí	o	primeiro	elemento	da	sequencia	
  for (var i = 1; i < sequencia.length; i++) {	//	usei	a	estrutura	de	repetição	para	verificar	cada	elemento	da	sequencia	numérica, comecei	no	elemento	1	porque	na	variável	resultado	ja	começamos	com	o	valor	do	elemento	0
    if (sequencia[i] > resultado) {	//	usei	a	estrutura	condicional	com	a	condição,	se	o	elemento	da	sequencia	for	maior	que	a	variável	resultado
      resultado = sequencia[i] //	atribuímos	o	elemento	na	variável	resultado
    }
  } return resultado;	//	declarei	o	retorno	da	variável	resultado	quando	usarmos	a	função
}
