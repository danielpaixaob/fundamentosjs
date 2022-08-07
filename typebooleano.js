//os tipos booleanos ele não é um texto e nem um numero, ele só pode ter dois valores "true"(verdadeiro) ou "false"(falso).
//Apesar disso, utilizamos muito esse tipo de dado, principalmente quando precisamos fazer comparações em estruturas como por ex: if, else, for, etc...
const num1 = 5;
const num2 = 10;

console.log(num1 === num2); //false
//Os três iguais "===" é exclusivo de Javascript, usado para fazer comparações entre duas variaveis.
//Um igual só "=" estamos atribuindo um valor para uma variável.
//Dois iguais "==" e três iguais "===" são comparações, que sempre retornam se são true(verdadeiro) ou false(falso).

const nume1 = 5;
const nume2 = 5;

console.log(nume1 === nume2); //true

//Os booleanos podem ser usados por exemplo para conferirmos cadastros em sistemas, liberando ou não o acesso do usuário para a utilização do sistema caso a senha dele esteja correta ou no caso seja "true"(verdadeiro)
let cadastroAtivado = true;
//Nesse exemplo criamos uma variável usando "let" e não "const", pois queremos poder trabalhar com essa variável mais para frente, moldando ela entre ser "true"(verdadeiro) ou "false"(falso).

const text1 = "Daniel";
const text2 = "d";

console.log(text1 === text2); //false
//Podemos usar para comparar duas strings sem problemas.

const texto1 = "Daniel";
const texto2 = "daniel";

console.log(texto1 === texto2); //false
//Ele diferencia letras maiusculas de letras minusculas, tornando a comparação "false"(falsa).