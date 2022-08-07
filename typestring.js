//tipo string (texto) usamos para guardar tipo de dados que não são tipo number e nem booleanos.

const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
// para criarmos uma variável do tipo string, usamos as aspas "" com a informação do dado dentro das aspas, funciona tanto com aspas duplas "" como com aspas simples'',

const stringDeNumeros = "123456";
const senha = "senhaSuperSegura123456!";
//O dado do tipo string pode armezenar numeros também, no caso do exemplo, quando precisamos armazenar uma senha com numeros, letras e caracteres.

const citacao = 'O Léo disse "Oi"';
//As aspas duplas podem ser usadas para fazer citações ou destaques no texto que precisa ser inserido, então abrimos a cadeia de strings com aspas simples '' e colocamos o texto em destaque com aspas duplas "Oi". O contrário também se aplica, abrindo com aspas duplas e colocando a citação com aspas simples.

const concatenacao = "Meu nome é ";
const nome = "Daniel.";
console.log(concatenacao + nome);
//concatenação é para juntar duas partes de texto, isso se faz usando o valor de (+) entre as duas strings.

//template string ou template literal é uma terceira forma de se escrever strings em Javascript.