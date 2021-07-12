/*Seção 2 - Javascript Básico
Vídeo nro. 28 - no git aula15
Objeto Math
 */

/*
o objeto Math é um recurso de matemática disponível na linguagem. Na aula veremos algumas coisas que podemos fazer com ele.
*/
// Para conhecimento: uma função dentro de um objeto é chamado de método.

//Arredondar

let num1 = 9.674356;
let num2 = Math.floor(num1); //arredonda para baixo
console.log(num2);
let num3 = Math.ceil(num1); //arredonda para cima
console.log(num3);
let num4 = Math.round(num1); //retorna arredondado para o mais próximo
console.log(num4)
let num5 = 9.49
let num6 = Math.round(num5); //retorna arredondado para o mais próximo
console.log(num6)

// Maior e menor
console.log(Math.max(1,3,5,6,7,9,300, -50, 1500, -5)); //retorna o número mais alto
console.log(Math.min(1,3,5,6,7,9,300, -50, 1500, -5)); // retorna o número mais baixo

// Random
console.log(Math.random()); // retorna uma número entre zero e um, sem incluir o 1

const aleatorio = Math.random() * (10 - 5) +5; // gera um número aleatório entre 10 e 5;
console.log(aleatorio);

//se quero arredondar o número para o inteiro mais próximos:
const aleatorio2 = Math.round(Math.random() * (10 - 5) +5);
console.log(aleatorio2);

// Valor de Pi
console.log(Math.PI);

// Valor potenciação
console.log(Math.pow(2, 10));
// ou
console.log(2 ** 10);

// Raíz quadrada
num7 = 16;
console.log(Math.sqrt(num7));
//ou
console.log(num7 ** 0.5)

// Valor Infinity - Infinity positivo é o valor mais alto que existe, infinity negativo é o valor mais baixo que existe. Em outras linguagens de programação, dividir por zero dá erro, mas no javaScript gera o Infinity. É uma maneira de não usar tanta memória adicionando zeros.
console.log(100/0);