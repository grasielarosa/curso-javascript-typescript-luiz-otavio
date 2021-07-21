/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 58 - aula 39 no git
While e Do While - Estrutura de repetição
 */

// * Geralmente se usa o for quando se sabe o tamanho do que o laço tem que recorrer, já o while e o do while, não sabemos quantas vezes a repetição terá que acontecer até que o laço termine.

let nome = 'Grasiela';
let controle = 0; // controle poderia ser i como no for, usei outro termo para diferenciar
// while (controle <= 10) {
//     console.log(controle)
//     controle++ // sem isso, o laço nunca sairia do zero, nunca chegaria no dez. 
// } 

// while (controle < nome.length) {
//     console.log(nome[controle]);
//     controle++
// }

/*
 * o while executa a condição a partir do momento que ela é verdadeira e para quando deixa de ser.
No exemplo abaixo, ao gerar um número aleatório e esse número não ser  um 10, o laço entra e começa a repetir a função até encontrá-lo. Quando encontra, sai.


*/
const random = (min, max) => {
    const r = Math.random()* (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand);

// while (rand != 10) {
//     rand = random(min, max);
//     console.log(rand);
// }

/*
* o do {} while vai executar e só depois checar a condição.
O do while será executa sempre, pelo menos uma vez, já que ele só verifica a condição depois de executar o código.
*/

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);