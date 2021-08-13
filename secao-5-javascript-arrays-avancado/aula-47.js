/* Seção 5: JavaScript - Arrays - Avançado
Vídeo nro. 83 aula 64 no git
Concatenar arrays
 */

/*
* Concat
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);


const array4 = [1, 2, 3];
const array5 = [4, 5, 6];
const array6 = array4.concat(array5, [7, 8, 9], 'Grasiela');
console.log(array6)
*/

/*
* Spread Operator (...) 
*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, 'Grasiela', ...array2, ...[7, 8, 9]];
// no novo array que coloquei, se não uso o spread operator, ele coloca o array iteral no novo array, isso é, com colchetes e tudo.


console.log(array3)
