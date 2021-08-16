/* Seção 5: JavaScript - Arrays - Avançado
Vídeo nro. 86 aula 67 no git
Função Reduce
 */

/*
    - também recebe uma função de callback;
    - o acumulador é onde a gente guarda o valor que vai ser modificado. No caso da função de números, avisamos que queremos começar em zero. o valor zero depois das chaves é o do acumulador. Se não declaramos valor inicial, o primeiro número é tomado como início do acumulador.
*/
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor;
  //console.log(acumulador, valor);
  return acumulador;
}, 0);

//console.log(soma)

/*retornar num pares - no acumulador, colocamos um array vazio que receberá os valores que passam pelo if. Isso deveria ser feito com o filter, é apenas para mostrar como funcionam.

const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador
}, []);

Para que tenha sentido com o reduce, poderia ser devolver a soma dos números pares, nesse caso, seria assim: 
*/

const somaPares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador += valor;
  return acumulador;
}, 0); // nesse caso, se não colocamos o zero, o acumulador começa contando com o 5, que é o primeiro valor.

/* aqui ele se comporta como map, e sequentemente, aplicaremos uma soma aos duplicados, para reduziar a apenas um número.
const duplica = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor*2);
    return acumulador
}, []);
*/

const duplica = numeros.reduce((acumulador, valor) => {
  acumulador += valor * 2;
  return acumulador;
}, 0);



// **********************************************

const pessoas = [
  {
    nome: "Luiz",
    idade: 62,
  },
  {
    nome: "Maria",
    idade: 23,
  },
  {
    nome: "Eduardo",
    idade: 55,
  },
  {
    nome: "Leticia",
    idade: 10,
  },
  {
    nome: "Rosana",
    idade: 64,
  },
  {
    nome: "Walace",
    idade: 63,
  },
];

//se o aacumulador é maior que o vaor, ele retorna o acumulador. Se não, ele retorna o valor.
const maisVelho = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maisVelho)