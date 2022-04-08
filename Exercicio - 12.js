//12. Crie uma função que, dada uma sequência de caracteres, inverta o seu conteúdo e retorne ao usuário o resultado invertido.

// neste exercício eu vou mostar duas maneiras de se chegar ao objetivo

/////////////////////// RESOLUÇÃO COM O MÉTODO SLICE E REVERSE /////////////////////////

function  inverter(conteudo){	// aqui criei uma função onde vamos usar 1 parâmetro com o nome de conteudo
 
    var resultado = conteudo.slice(0).reverse(); // criei uma variável com o nome resultado e atribuí a variável conteúdo, usei o método .slice com o valor inicial 0 para copiar a variável conteúdo a partir do indice 0, e o método .reverse para inverter a variável conteúdo
    return  resultado; // aqui usei a declaração return, para retornar a variável resultado quando usarmos a função
  }
  
  /////////////////////// RESOLUÇÃO COM ESTRUTURA DE REPETIÇÃO/////////////////////////
  
  function invertido(conteudo){ // aqui criei uma função onde vamos usar 1 parâmetro com o nome de conteudo
    var	resultado	=	[]; //	aqui criei a variável resultado, onde atribuimos uma array vazia
    for(i	=	0;	i	<	conteudo.length;	i++){ //	usei a estrutura de repetição junto com unshift para pegar todos os itens da array conteúdo e passar para a array resultado, mas de forma invertida
      resultado.unshift(conteudo[i]) // não usei o .push, pois ele manda os elementos para o final da lista, enquanto o .unshift, manda para o inicio da lista, dessa forma conseguimos inverter os elementos
    
    } return resultado;	// aqui usei a declaração return, para retornar a variável resultado quando usarmos a função
  }
  
  