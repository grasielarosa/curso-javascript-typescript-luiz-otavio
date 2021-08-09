/* Seção 4: JavaScript - Funções - Avançado
Vídeo nro. 73 - aula 51 no git
Funções de Callback
 */
/*
---> essas funções se executam na hora que aparece, mas não temos como prever o comportamento, o tempo que levará uma função para buscar algo em um banco de dados ou fazer uma operação.


function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

function olaMundo() {
    console.log('olá mundo!');
}
f1();
f2();
f3();
*/


/*

-----> da maneira abaixo, com os setTimeOut já vemos que elas podem ser executadas em ordens diferentes. No caso a seguir, executar-se-á respectivamente: olaMundo(), fi(), f3() e f2.


function f1() {
    setTimeout(function(){
        console.log('f1');
    }, 500);
}

function f2() {
    setTimeout(function(){
        console.log('f2');
    }, 1000);
}

function f3() {
    setTimeout(function(){
        console.log('f3');
    }, 800);
}

function olaMundo() {
    console.log('olá mundo!');
}
f1();
f2();
f3();
olaMundo();
*/

/* Nessa função estão se executando com setTimeOut definido pela função rand. Ou seja, com excessão do olá mundo, não sabemos quando cada uma delas será executada.

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1() {
    setTimeout(function(){
        console.log('f1');
    }, rand());
}

function f2() {
    setTimeout(function(){
        console.log('f2');
    }, rand());
}

function f3() {
    setTimeout(function(){
        console.log('f3');
    }, rand());
}

function olaMundo() {
    console.log('olá mundo!');
}

f1();
f2();
f3();
olaMundo();
*/

/*
Dessa maneira, cada uma das funções retornará na sua ordem, porém ficam como uma mamushka e é pouco prolixo.

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}

function olaMundo() {
    console.log('olá mundo!');
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá mundo!');
        })
    })
})
*/


//O código a seguir é identico ao anterior, porém criamos funções de callback separadas para que não fiquem funções anônimas uma dentro da outra.

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá Mundo!')
}

