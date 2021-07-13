/*Seção 2 - Javascript Básico
Vídeo nro. 34 - aula19 no git
Valores primitivos e valores por referência
 */

/*
Um primitivo (valor primitivo, tipo de dados primitivo) é um dado que não é representado através de um Objeto e, por consequência, não possui métodos.
Dados primitivos são os imutáveis, ou seja, não podem ter seu valor modificado. 
Na maior parte do tempo, um valor primitivo é representado diretamente através do mais baixo nível da implementação de uma linguagem. São eles: string, number, boolean, undefined e null. Também estão bigint e symbol que não vimos ainda.
estamos falando de VALOR e não da VARIÁVEL.
*/

let a = 'A';
let b = a; // isso gera uma cópia do valor, são variáveis independentes
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); // o valor de b não muda, porque foi feita uma cópia do valor de a antes dele ser modificado. 

/*
Valores por referência são mutáveis, vimos array, object e function. Apontam para o mesmo lugar da memória, não geram cópia.
*/

let c = [1, 2, 3];
let d = c;
console.log(c, d); 

c.push(4)
console.log(c, d); // nesse caso o d também é afetado pela mudança no c, pois eles são passados por referência.

//uma maneira de que isso não aconteça é fazendo um spread (Spread Syntax = Sintaxe de Espalhamento)

let e = [1, 2, 3];
let f = [...e];
console.log(e, f);

e.push(4);
console.log(e, f);
f.pop();
console.log(e, f);

//Os objetos também recebem valores por referência, isso é, também apontam para o mesmo lugar na memória.

const pessoa1 = {
    nome: 'Grasiela',
    sobrenome: 'Rosa',
}
const pessoa2 = pessoa1 
console.log(pessoa2) // nesse momento, pessoa 2 é { nome: 'Grasiela', sobrenome: 'Rosa' }

pessoa1.nome = 'Gabriela';
console.log(pessoa2) // ao modificar pessoa1, automaticamente modificamos a pessoa2, pois seus valores são referenciados por pessoa1. Isso imprime: { nome: 'Gabriela', sobrenome: 'Rosa' }

// Para que isso não aconteça, fazemos um spread... espalhamos o valor de pessoa2 para que não seja alterado por essas modificações

const pessoa3 = {
    nome: 'Grasiela',
    sobrenome: 'Rosa',
}
const pessoa4 = {...pessoa3}
console.log(pessoa4)

pessoa3.nome = 'Fernanda';
console.log(pessoa3, pessoa4)