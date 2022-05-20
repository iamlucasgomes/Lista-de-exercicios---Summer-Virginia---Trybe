//5. Escreva uma função que calcule a soma de 1 a 1000 usando a estrutura de repetição for e retorne no formato: "A soma de 1 a 1000 é: x."

/////////////////////// RESOLUÇÃO COM ESTRUTURA DE REPETIÇÃO /////////////////////////

function soma(numero1,  numero2){ // criei uma função com o nome soma para receber as duas entradas de valores

    var resultado; // criei a variável resultado, na qual vai receber a resposta que queremos
    var numero3 = 0; // criei a variável numero3 para receber o valor da soma
    for(var i = 0;  i < numero2; i++){ // criei uma estrutura de repetição que vai repetir até o limite imposto por numero2
          numero3 +=	numero1 + i // aqui a variável numero3 está recebendo o seguinte cálculo numero3	+	numero1	+	i, pra ficar mais claro poderiamos fazer numero3 = numero3	+	numero1	+	i
          resultado = "A soma dos números de " +	numero1	+ " até "+numero2+" é: " + numero3 // resultado recebeu a concatenação de string com as variáveis numero1,numero2 e numero3 para formar uma resposta melhor elaborada
        
    } return resultado;	//	usamos o comando return na variável resultado, para retornarmos o valor de resultado quando usarmos a função
  }
   
///////////////////////           RESOLUÇÃO MAIS SIMPLES      /////////////////////////

function soma(numero1,  numero2){

const total = (numero1 + numero2) * (numero2 / 2);
console.log(total);
} 