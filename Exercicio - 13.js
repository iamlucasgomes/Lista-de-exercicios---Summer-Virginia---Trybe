//	13. Crie uma função que receba como parâmetro uma string que armazene uma cor referente ao funcionamento de um semáforo e que retorne uma mensagem para cada cor, seguindo as condições abaixo:
//	Se a cor for vermelho, retorne a mensagem "PARE!";
//	Se a cor for amarelo, retorne a mensagem "ATENÇÃO!";
//	Se a cor for verde, retorne a mensagem "PROSSIGA!";

function semaforo(cor){ // criei uma função onde ela recebeu o parâmetro cor
  
    //	nesse exercício vamos precisar usar o if/else
      if(cor  === "vermelho"){ //	a lógica é, if(se) cor igual a vermelho
        return  "PARE!";	// usamos o return para retornar a mensagem PARE!
      }else if(cor  === "amarelo"){ //	else if(senão) cor igual a amarelo
        return "ATENÇÃO!";	// usamos o return para retornar a mensagem ATENÇÃO!
      }else if(cor  === "verde"){ //	else if(senão) cor igual a verde
        return "PROSSIGA!";	// usamos o return para retornar a mensagem PROSSIGA!
      }
    }