//9. Crie uma função que receba como parâmetro um array de números inteiros e que retorne APENAS o maior número dentre os informados.

function  maiorNumero(numeros){ // criei uma função que recebeu o nome MaiorNumero e o parâmetro numeros
    var resultado = Math.max(...numeros) //	aqui criamos a variável resultado e atribuímos o comando Math.max a ela para saber qual é o maior número, usamos o operador spread para copiarmos a sequência da variável números, sem ele nossa função retorna NaN
    return  resultado; // usei aqui o comando return para retornar a variável resultado quando usarmos nossa função
  }
  