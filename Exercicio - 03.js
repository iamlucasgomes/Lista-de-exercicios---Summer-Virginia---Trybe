//  3. Escreva uma função que receba como parâmetros o nome, o sobrenome, a idade e a cidade de uma pessoa, e que retorne uma concatenação com os dados fornecidos.
 
function  dados(nome, sobrenome,  idade,  cidade){ // Aqui criei uma função com o nome dados para receber os valores que queremos retornar com a função

  var resultado = "Meu nome é "	+ nome  + " " + sobrenome + ", tenho "  + idade + " anos, e moro em "  + cidade  ; // aqui criei a variável resultado e atribui os dados concatenados
    return resultado; // aqui usei o comando return para retornar a variável resultado quando usarmos a função
}

dados("Lucas","Gomes",30,"Brasilia")
