/* Seção 4: JavaScript - Funções - Avançado
Vídeo nro. 68 - aula 49 no git
Maneiras de Declarar Funções
 */

// Declaração de função ( function hoisting) -> Não importa onde declare, o motor do js sempre vai elevá-las para o topo do código na hora de executar. Posso chamar a função antes ou depois de declará-la que dá no mesmo.

//falaOi()
function falaOi() {
    console.log('Oi');
}
falaOi()


// funç±oes são first-class objects (objetos de primeira classe). Isso quer dizer que a função podem ser tratadas como dados (function expression).

const souUmDado = function () {
    console.log('Sou um dado');
}
//souUmDado(); // nesse caso, tem que chamar depois.

function executaFuncao(funcao) {
    console.log('executo sua função logo abaixo')
    funcao(); //executar o parâmetro
}
executaFuncao(souUmDado);


// arrow function -> function expression mais curta
const funcaoArrow = () => {
    console.log('sou uma arrow function')
}
funcaoArrow();

// dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...')
    }
}
    obj.falar(); // uso notação de ponto para executar uma função dentro de um objeto

    