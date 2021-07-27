/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 64 - aula 45 no git
setInterval e setTimeout
 */

const mostraHora = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

console.log(mostraHora());

// * setInterval vai configurar um intervalo de tempo para que uma função seja executada em determinado momento.

// const funcaoDoIntervalo = () => {
//     console.log(mostraHora())
// }

// setInterval(funcaoDoIntervalo, 1000) // dessa maneira a cada um segundo o set interval executa a funcaoDoIntervalo, que executa a função mostrar hora. Pode ser mais simples com funções anônimas.

// setInterval(function (){
//     console.log(mostraHora());
// }, 1000)

// o setInterval, posso colocá-lo em uma variável, como fizemos no matcheadas. 
const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000)

// ##########
// Já o setTimeout executa a função apenas uma vez. E podemos usá-la para parar a execução da anterior.

setTimeout(function() {
    clearInterval(timer);
}, 5000) // vai parar o timer quando ele tiver sido executado por 5 segundos.

// também pode ser um temporizador para mostrar algo na tela.
setTimeout(function() {
    console.log('O timer parou!');
}, 7000);