//	11. Crie uma função que receba uma array de números e verifique se cada um deles é divisível por 5. Se sim, armazene-os e retorne-os.

function eDivisivel(numeros,divisivel){ // criei uma função para receber o parâmetro números como foi pedido no enunciado, mas pra deixar o código dinâmico eu criei um parâmetro chamado divisivel para colocarmos o valor no qual queremos saber se a array numeros é divisível
 
 
    var resultado = [];	// aqui criei a variável resultado para atribuirmos os valores que são divisíveis 
   
    for(var indice  = 0;  indice <  numeros.length; indice++){	// criei uma estrutura de repetição para iterar todos os valores da variável numeros
      if(numeros[indice]	%	divisivel	===	0){ // e aqui usei o if(se) com a seguinte lógica, se cada indice da variável números for divisivel pela variável divisivel
        resultado.push(numeros[indice]); // adicionaremos ele ao array resultado com o comando .push
      } 
    }
      return "Os números divisiveis por "	+	divisivel	+	" : " + resultado.sort() +"." // usei o comando return para retornar uma concatenação de uma string com as variáveis divisível e resultado e o método .sort pra organizar os numeros em ordem crescente na variável resultado
    } 