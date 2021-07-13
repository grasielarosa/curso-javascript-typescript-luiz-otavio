/*Seção 2 - Javascript Básico
Vídeo nro. 32 - aula17 no git
Funções - Básico
 */

/*
criamos funções para ter trechos de código que podem ser reutilizados ao longo do projeto. Damos preferência por fazer pequenas funções que façam uma coisa em lugar de funções gigantes que façam várias, para que assim possamos reutilizar.
*/

function saudacao(nome){
    return `Bom dia, ${nome}!`;
}
saudacao('Grasiela');
saudacao('Pedro');
saudacao('Maria');

const variavel = saudacao('Luiz');
console.log(variavel);

// function soma(x, y) {
//     const resultado = x + y;
//     return resultado
// }

// function soma(x, y) {
//     return x + y;
// }

// console.log(soma(2,10));
// console.log(soma(6,9));
// console.log(soma('Grasiela', ' Rosa'));

// function soma(x = 1, y = 1) { //nesse caso, se eu não envio valores quando chamo a função, x e y assumem os valores dos parâmetros. Se eu coloco só um valor, x recebe o novo valor. 
//     return x + y;
// }
// console.log(soma()); //2
// console.log(soma(5)); //6
// console.log(soma(2,10)); //12


//Função anônima

// const raiz = function (n) {
//     return n ** 0.5
// };

// console.log(raiz(9));

// Arrow Function

// const raiz =  (n) => {
//     return n ** 0.5
// };


// também pode ser escrita assim
const raiz = n => n ** 0.5; //se tem só um parâmetro não precisa deixar os parênteses

console.log(raiz(16));