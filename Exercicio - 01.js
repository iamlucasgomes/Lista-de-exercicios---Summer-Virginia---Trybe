//. Faça uma função que receba como parâmetro duas notas de uma pessoa estudante. Em seguida, você deve calcular a média dessas notas e atribuir a variável resultado a mensagem correspondente:
//- A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//- A mensagem "Reprovado", se a média for menor do que sete;
//- A mensagem "Aprovado com Distinção", se a média for igual a dez.
 
function nota(nota1,  nota2){

  var resultado;	//	variavel onde vou atribuir o resultado 
  var media = (nota1 + nota2) / 2;	//	aqui criei uma variável com o nome média onde atribuimos a formula para encontrar uma média

  if(media >=  7){ //	se	a média for maior ou igual a 7
    resultado = "Aprovado";   //	"Aprovado" é atribuido a variável resultado  
  } else if(media < 7){   //	se	a média for menor que 7
    resultado = "Reprovado";  //	"Reprovado" é atribuido a variável resultado 
  } if(media ===  10){  //	se	a média for igual a 10
    resultado = "Aprovado com Distinção"; //	"Aprovado com Distinção" é atribuido a variável resultado 
  } return resultado; //usamos o return para retornar o valor a variável resultado
}
