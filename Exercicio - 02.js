//2.  Crie uma função que verifique se uma pessoa pode votar ou não, de acordo com as condições abaixo e que retorne a mensagem correspondente:
//- Entre 0 e 15 anos: "Não pode votar";
//- 16, 17 e acima de 70 anos: "Voto facultativo";
//- Entre 18 e 69 anos: "Voto obrigatório".

function votar(idade){ // Criei uma função para verificarmos se a pessoa pode votar, baseado na idade
  var resultado;  //  Criei essa variável vazia para atribuirmos o resultado do if/else
  if(idade  <=  15){  //  esse if significa que todas as pessoas abaixo de 15 anos não podem votar
    resultado = "Não pode votar";
  } else  if(idade  <=  17  ){  //  esse else if significa que se tiver 17 ou 16 o voto é facultativo
    resultado = "Voto facultativo";
  } else  if(idade  >=  70){  // esse else if significa que se tiver 70 anos ou mais, o voto é facultativo
    resultado = "Voto facultativo";
  } else{ // esse else significa que pessoas entre 18 e 69 anos tem voto obrigatório
    resultado = "Voto obrigatório";
  } return  resultado; // usamos o return para retornar o resultado quando usarmos a função
}
