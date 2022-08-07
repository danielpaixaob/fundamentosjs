// tipo Number
//toda vez que precisamos armazenar uma informação qualquer seja ela numero, string ou booleana, precisar criar uma variável.

      //variável   //recebe  //valor
const   meuNumero       =       3;
// exemplo 1, a palavra "const" é uma das formas usadas para criar uma variável. Criamos a variável chamada "meuNumero" que recebe "=" o valor do número 3.

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMultiplicacao = primeiroNumero * segundoNumero;
//exemplo 2, conseguimos com o armazenamento e criação das variáveis fazer operações matemáticas usando as variáveis tipo número(number)

console.log(operacaoMultiplicacao);
//com o comando "console.log()" podemos exibir o resultado do nosso código no terminal, verificando se está tudo funcionando corretamente.

//sempre salvar com o "Ctrl + S" e executar no terminal usando o comando "node + (nome do arquivo)" 

//obs:sempre verificar se está com o arquivo na pasta correta que está tentando executar o código.

const operacaoDivisao = primeiroNumero / segundoNumero;
const operacaoSoma = primeiroNumero + segundoNumero;
const operacaoSubtracao = primeiroNumero + segundoNumero;

console.log(operacaoDivisao);
console.log(operacaoSoma);
console.log(operacaoSubtracao);
// exemplo 3, podemos fazer qualquer tipo de operação matemática com os tipos números, divisão usando "/", soma usando "+", subtração usando o "-" e a multiplicação usando o "*".

const numeroPontoFlutuante = 3.3;
//Ponto Flutuante, são os números decimais, que tem um número um ponto e outro número.
const pontoFlutuante = .5;
//O Javascript aceita declar "0.5" utilizando somente o ".5" sem o zero no começo.

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);
//podemos realizar operações matemáticas com esses chamados pontos flutuantes sem nenhum problema, utilizando números inteiros e os pontos.


//exemplo de erro (NaN)
const alura = "Alura";
console.log(alura * primeiroNumero);
//O erro Nan -> Not A Number(não é um número) aparece quando o Javascript não consegue realizar uma operação.
