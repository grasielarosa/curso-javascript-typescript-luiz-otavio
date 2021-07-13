/*
Seção 2 - Javascript Básico
Vídeo nro. 21
Operadores aritméticos, de atribuição e incremento
 */

/* Operadores aritméticos
 (+) adição e concatenação
 (-) subtração
 (/) divisão
 (*)  multiplicação
 (**) potenciação
 (%) resto da divisão
*/

let num1 = 5;
const num2 = 10;
console.log(num1+num2)
num1 = "5";
console.log(num1+num2)

/* Incremento e decremento
(++) e (--)
sempre usar let; 
pode ser chamado antes ou depois da variável:
antes, primeiro faz o increento depois mostra o valor
depois, primeiro mostra o valor e depois o incremento
*/

let contador1 = 1;
console.log(contador1++);
console.log(`Contador 1: ${contador1}`);

let contador2 = 1
console.log(++contador2);
console.log(`Contador 2: ${contador2}`);

let contador3 = 10;
console.log(contador3--);
console.log(`Contador 3: ${contador3}`);

let contador4 = 10
console.log(--contador4);
console.log(`Contador 4: ${contador4}`);

// incremento ou decremento é apenas de um em um, se quisermos somar mais teria que ser, por exemplo contador = contador + 2

// Operadores de atribuição 
let contador5 = 1
contador5 += 2
console.log(`Contador 5: ${contador5}`)

let contador6 = 1
contador6 -= 2
console.log(`Contador 6: ${contador6}`)

let contador7 = 10
contador7 *= 2
console.log(`Contador 7: ${contador7}`)

let contador8 = 10
contador8 /= 2
console.log(`Contador 8: ${contador8}`) //5

let contador9 = 10
contador9 **= 2
console.log(`Contador 9: ${contador9}`) //100

let contador10 = 13
contador10 %= 5
console.log(`Contador 10: ${contador10}`) //3

/*
NaN significa not a number e acontece, por exemplo, quando não se pode converter os dados a números, por exemplo, em uma tentatica de multiplicar um número com um string.
*/

//const num3 = 5;
//const num4 = "5";
//console.log(num3*num4) // resultado é NaN

//poderíamos resolver dessas duas maneiras

// const num3 = 5;
// const num4 = parseInt("5");
// console.log(`com parseInt: ${num3*num4}`)// resultado 25

// const num3 = 5;
// const num4 = parseFloat("5.2");
// console.log(`com parseFloat: ${num3*num4}`); //26

const num3 = 5;
const num4 = Number("5");
console.log(`com Number: ${num3*num4}`) // resultado 25, não diferencia inteiro e float