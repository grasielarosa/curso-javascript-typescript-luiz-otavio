/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 50 - aula32 no git
atribuição via desestruturação - arrays
 */

/* let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [1, 2, 3];
[a,b,c] = numeros; // -> atribuição via desestruturação

const letras = ['B', 'C', 'A'];
[a, b, c] = letras;
console.log(letras)
*/


// *****************************

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
//const primeiroNumero = numeros[0];
//console.log(primeiroNumero);

// * com isso podemos arrancar um valor de um array e atribuir a uma variável
// * rest operator (...) -> quando queremos pegar o resto das coisas. É o mesmo símbolo do spread.

//const [primeiroNumero, segundoNumero, ...resto] = numeros;
//console.log(primeiroNumero, segundoNumero);
//console.log(resto);

// * outro modo é:
//const [um, , tres, , cinco, , sete] = numeros; // espaços vazios para saltar índice
//console.log(um, tres, cinco);

//                    0          1         2
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//para acessar o número 6 -> equivale ao índice i e j da ADA:
console.log(numeros2[1][2]);

