/*
Seção 2 - Javascript Básico
Vídeo nro. 15
constantes com const
 */

/* seguem as mesmas regras gerais da criação de variáveis com let e incluem:
- não é possível modificar o valor atribuído a uma constante;
- não é possível não declarar a constante;
- preferencialmente, usamos const. Usaremos let somente quando no decorrer do código precisemo modificar o valor da variável.
*/

// const nome = "João";
// console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado); //50
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado); //100

console.log(typeof(primeiroNumero));
