function ganhoPorHora(salario, horasTrabalhadasNoMes) {
    
    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    return salarioHora;
  }

console.log(ganhoPorHora(3000,176))
//a função dessa forma deixa o resultado com muitas casas decimais, o resultado fica 17.045454545454547.

function ganhoPorHoraComMathRound(salario, horasTrabalhadasNoMes) {
    
  const salarioHora = (salario / horasTrabalhadasNoMes); 

  return Math.round(salarioHora);
}
//usando o comando Math.round faz com que arrendonde o resultado para um número inteiro, ex: 17
console.log(ganhoPorHoraComMathRound(3000,176))


function ganhoPorHoraComToFixed(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes); 

  const total = salarioHora.toFixed(2);

  return total;

};
//usando o comando .toFixed(), conseguimos colocar quantas casas depois da virgula queremos que aparece, ficando mais fácil quando precisamo saber os centavos de uma conta por exemplo. obs: o comando sempre arredonda para cima, e traz o resultado como uma string representando um número.
console.log(ganhoPorHoraComToFixed(3000,176))

function ganhoPorHoraParaMoedaReal(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes); 

  const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return formatado;

}
// o comando .toLocaleString, serve para converter o resultado para a moeda do país. Ele recebe algumas propriedades para funcionar. 
//No exemplo, ele recebeu style: que é permitido usar 3 tipos
// decimal => para representar números simples.
// currency => formato monetário e que vai indicar a moeda a ser utilizada.
// percentual => para formato percentual.
//E também recebeu currency:'BRL' ==> A moeda para usar na formatação monetária
console.log(ganhoPorHoraParaMoedaReal(3000,176))