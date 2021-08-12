/* Seção 4: JavaScript - Funções - Avançado
Vídeo nro. 79 e 80 - aula 60 e 61 no git
Funções Recursivas e funções geradoras
 */


// * Recursivas
/* é uma função que ela mesma se chama de volta
assim como o while, precisamos de um incremento ou decremento para que ela saia do lugar (++ ou --). Também precisamos dar um imite para que ela não chame a si mesma eternamente.
* o mais importante aqui é sempre lembrar de colocar um limite para ela.

const recursiva = (max) => {
    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(-10);
*/

//* Geradoras
/*
As funções geradores são as que eu "pausam" as funções, como no caso de eu precisar que ela me entregue 3 valores diferentes, um de cada vez.
lazy evaluation - buscar

*yield funciona como um return, com a diferença que ele não encerra a função. No caso representado abaixo, na primeira vez que chamo geradora1(), ele retorna o primeiro yield, na segunda vez que eu chamar a função, ele retornará o valor 2, etc...
*/

function* geradora1(){
    //código
    yield 'valor 1'
    //código
    yield 'valor 2'
    //código
    yield 'valor 3'
}

// const g1 = geradora1();
// console.log(g1); // retorna Object [Generator] {}
// para ver o valor, usamos o método next()
//console.log(g1.next());
// { value: 'valor 1', done: false }
// o done: false avisa que ainda há mais valores para obter
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next()); //dessa vez, com o next aqui, o done tem valor true.

// com um for que vai iterar até chegar no último valor
/*
const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
}
*/

// * geradora dentro de geradora
/*
function* geradora2() {
    yield 0;
    yield 2;
    yield 3;
    yield 4;
}
function* geradora3() {
    yield* geradora2();
    yield 5;
    yield 6;
    yield 7;
}

const g3 = geradora3();
for(let valor of g3) {
    console.log(valor)
}
*/

function* geradora4() {
    yield function(){
        console.log('o yield pode ser uma função');
    };
    //...
    yield function() {
        console.log('e logo chamar mais outra');
    };
}

const g4 = geradora4();
const func1 = g4.next().value;
const func2 = g4.next().value;

func1();
func2();

// * o return finaliza a função, então, se ele estiver antes de un yield, este yield não será executado.