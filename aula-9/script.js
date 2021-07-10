/*Seção 2 - Javascript Básico
Vídeo nro. 24
exercício com variáveis
 */

let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

// fazer com que as varáveis recebam os valores B, C e A consequentemente.

/* varA = varB; //B
varB = varC;// C
varC = varA; //B

console.log(varA, varB, varC)
nesse caso, o valor de varA já está com o valor de b, então o varC retornará o valor inicial de varB.
*/

// const varAtemp = varA
// varA = varB;
// varB = varC;
// varC = varAtemp;

// console.log(varA, varB, varC)

// com uma variável adicional, guardamos o valor da varA antes de modificá-lo.

// com arrays poderíamos resolver de maneira mais simples

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);