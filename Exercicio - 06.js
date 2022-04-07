//	6. Escreva uma função que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e retorne o resultado no seguinte formato: "Jogador 1 ganhou" ou "Empate" ou "Jogador 2 ganhou".

function jokenpo(jogador1,  jogador2){	// criei a função jokenpo, onde vamos atribuir a mão de cada jogador

    var resultado; // baseada na mão vencedora criei a variável resultado vazia, para receber o resultado 
          
              if (jogador1 === "pedra") {	// aqui usei o if com a seguinte lógica, "se" o jogador1 jogar pedra
   
              if (jogador2 === "pedra") {	// aqui usei o if com a seguinte lógica, "se" o jogador2 jogar pedra
                  resultado = "Empate";	//	como os 2 jogadores jogaram o mesmo valor, teremos um empate
              } else if (jogador2 === "papel") { // aqui usei o else if com a seguinte lógica, "senão se" o jogador2 jogar papel
                  resultado = "Jogador 2 ganhou";	// teremos a vitória do jogador2 pois ele jogou papel
              } else if (jogador2 === "tesoura") {	// aqui usei o else if com a seguinte lógica, "senão se" o jogador2 jogar tesoura
                  resultado = "Jogador 1 ganhou";	// teremos a vitória do jogador1 pois o jogador2 jogou tesoura
              }
   
          } else if (jogador1 === "papel") {	// aqui usei o else if com a seguinte lógica, "senão se" o jogador1 jogar papel
   
              if (jogador2 === "pedra") {	// aqui usei o if com a seguinte lógica, "se" o jogador2 jogar pedra
                  resultado = "Jogador 1 ganhou";	//	teremos a vitória do jogador1 pois ele jogou papel
              } else if (jogador2 === "papel") {	// aqui usei o else if com a seguinte lógica, "senão se" o jogador2 jogar papel
                  resultado = "Empate";	//	como os 2 jogadores jogaram o mesmo valor, teremos um empate
              } else if (jogador2 === "tesoura") {	// aqui usei o else if com a seguinte lógica, "senão se" o jogador2 jogar tesoura
                  resultado = "Jogador 2 ganhou";	// teremos a vitória do jogador2 pois ele	jogou tesoura
              }
   
          } else if (jogador1 === "tesoura") { // aqui usei o else if com a seguinte lógica, "senão se" o jogador1 jogar tesoura
   
              if (jogador2 === "pedra") {	// aqui usei o if com a seguinte lógica, "se" o jogador2 jogar pedra
                  resultado = "Jogador 2 ganhou";	//	teremos a vitória do jogador2 pois ele jogou pedra
              } else if (jogador2 === "papel") {	// aqui usei o else if com a seguinte lógica, "senão se" o jogador2 jogar papel
                  resultado = "Jogador 1 ganhou";	//	teremos a vitória do jogador1 pois ele jogou tesoura
              } else if (jogador2 === "tesoura") {	// aqui usei o else if com a seguinte lógica, "senão se" o jogador2 jogar tesoura
                  resultado = "Empate";	//	como os 2 jogadores jogaram o mesmo valor, teremos um empate
              }	//	o else if do jogador1 foi usado intercalado com o if/else do jogador2 
   
          } return  resultado;	// usei o comando return para retornar a variável resultado quando usarmos a função
  }
  
  