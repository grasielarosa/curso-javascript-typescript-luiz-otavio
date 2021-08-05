/* Seção 4: JavaScript - Funções - Avançado
Vídeo nro. 70 - aula 51 no git
Retorno da função
 */

// return retorna um valor e termina a função --> isso é oq ue vimos até agora.

// algumas funções, em especial dentro de eventos, podem não retornar nada e ainda assim são úteis, como é o caso do exemplo a seguir:

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });
// ela executa uma ação mas não retorna valor. 

// a função abaixo retorna um objeto

// const criaPessoa = (nome, sobrenome) => {
//     return {nome, sobrenome};
// }
// const p1 = criaPessoa('Grasiela', 'Rosa');
// const p2 = {
//     nome: 'João',
//     sobrenome: 'Oliveira'
// };

// ambas devolvem objetos, mas da primeira maneira eu posso criar uma função que gere os objetos para mim.
// console.log( p1);
// console.log( p2);

//-----------
// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + '' + resto; // esse return responde só pela função falaResto
//     }
//     return falaResto; // esse return responde a função de fora, mas não executa a func'ão interna
// }

// const olaMundo = falaFrase('Olá');
// console.log(olaMundo); //devolve uma função
// console.log(olaMundo()); // devolve ola undefined
// console.log(olaMundo(' mundo!')); 
//agora sim devolve ola mundo, porque foi enviado o parâmetro da segunda função

// também posso criar diretamente uma constante para resto

// const resto = olaMundo(' mundo!');
// console.log(resto);

// Exemplo de código onde isso seria útil

const criaMultiplicador = (multiplicador) => {
    return function(n) {
        return n * multiplicador;
    }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// em resumo, podemos retornar um valor primitivo, um objeto, uma função, um setInterval...