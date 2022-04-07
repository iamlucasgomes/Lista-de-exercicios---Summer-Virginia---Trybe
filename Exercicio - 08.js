//8. Crie uma função que receba como parâmetro a nota de uma pessoa estudante e que retorne uma mensagem de acordo com a pontuação obtida.
//> NOTAS
//- abaixo de 10: PÉSSIMO
//- entre 11 e 30: RUIM
//- entre 31 e 50: REGULAR
//- entre 51 e 70: MEDIANO
//- entre 71 e 90: ÓTIMO
//- acima de 91: EXCELENTE

function  desempenho(nota){ // criei uma função com o nome desempenho, que vai receber o parâmetro nota
  
    if(nota <=  10){ // aqui usamos o if com a lógica, if(se) a nota for menor ou igual a 10
      return  "PÉSSIMO" // retornamos com o comando return a String "PÉSSIMO"
    } else if (nota <=  30){	// aqui usamos o if com a lógica, if(se) a nota for menor ou igual a 30
      return  "RUIM"	// retornamos com o comando return a String "RUIM"
    } else  if(nota <=  50){	// aqui usamos o if com a lógica, if(se) a nota for menor ou igual a 50
      return  "REGULAR" // retornamos com o comando return a String "REGULAR"
    } else  if(nota <=  70){	// aqui usamos o if com a lógica, if(se) a nota for menor ou igual a 70
      return  "MEDIANO"	// retornamos com o comando return a String "MEDIANO"
    } else  if(nota <=  90){	// aqui usamos o if com a lógica, if(se) a nota for menor ou igual a 90
      return  "ÓTIMO"	// retornamos com o comando return a String "ÓTIMO"
    } else  {	// aqui usamos o else, com a lógica, "senão" for nenhuma das outras alternativas
      return  "EXCELENTE"	// retornamos com o comando return a String "EXCELENTE"
    }
  }