//15. Faça uma função que receba como parâmetro dois números e que imprima na tela uma mensagem de acordo com as condições abaixo:
//"Os Números são iguais", se os números sejam iguais;
//"O primeiro número é maior", se o primeiro seja maior que o segundo;
//"O segundo número é maior", se o segundo seja maior que o primeiro.

function  igualOuMaior(numero1, numero2){ // criei uma função que vai receber dois parâmetros, numero1 e numero2
  
	if(numero1 ===  numero2){ // usamos o if para saber se numero1 é igual ao numero2
   	 	console.log("Os	números são iguais"); // se nosso if tem a resposta true, imprimimos na tela "Os	números são iguais"
  		} else  if(numero1  > numero2){	//	usamos else if para sabermos se numero1 é maior que numero2
    	console.log("O primeiro número é maior");	// se nosso else if tem a resposta true, imprimimos na tela "O primeiro número é maior"
  		}else{ // usamos o else com a lógica,  se não for nenhuma das opções acima,
    	console.log("O segundo número é maior");	// imprimimos na tela "O segundo número é maior"
  } 
}