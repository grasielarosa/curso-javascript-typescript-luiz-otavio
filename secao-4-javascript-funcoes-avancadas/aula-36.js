/* Seção 4: JavaScript - Funções - Avançado
Vídeo nro. 69 - aula 50 no git
Parâmetros da função
 */
/*
function funcao() {
    console.log(arguments); // arguments só funciona para function
    console.log(arguments[0]);
    console.log(arguments[3]);
};

funcao('valor', 1, 2, 3, 4);

function somar() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
somar(1, 2, 3, 4, 5, 6);

function undefinedF(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
};
undefinedF(1, 2, 3); // os três argumentos fatantes para cumprir com parâmetros são undefined -> 1 2 3 undefined undefined undefined. Ele não gera erro quando o número de parâmetros e argumentos divergem.

function somar2(a, b) {
    //b = b || 0; // uma maneira de resolver o valor de b ou então no argumento (a, b = 2, c = 3) Esses valores só são tomados caso não enviemos o valor de b e c nos argumentos
    console.log(a + b);
};
somar2(5); //tenho dois parâmetros mas apenas um argumento. Retorna Nan porque não é uma conta aritmética válida.

function somar5(a, b = 2, c = 4) {
    console.log(a + b + c);
};

somar5(2, undefined, 20); // a única maneira dele tomar o valor de b que está no parâmetro sem enviar é colocando undefined. Se colocar espaço vazio ou string dá erro. 

function objeto( { nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: "Grasiela", sobrenome: "Rosa", idade: 33};
objeto(obj);

function array( [valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
array(['Grasiela', 'Rosa', 33]);

*/
// aqui usamos o rest operator para dizer que todos o resto de argumentos pertencem a esse parâmetro. Poderia ser sem o rest e no argumento colocar um array com os números

function conta(operador, acumulador, ...numeros) { 
    //console.log(operador, acumulador, numeros); // aqui mostra os números no array
    for (let numero of numeros) {
        if (operador === '+') acumulador +=numero;
        if (operador === '-') acumulador -=numero;
        if (operador === '/') acumulador /=numero;
        if (operador === '*') acumulador *=numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50 )

/* para fazer uma function expression: 
 const conta = function(operador, acumulador, ...numeros) { 
    for (let numero of numeros) {
        if (operador === '+') acumulador +=numero;
        if (operador === '-') acumulador -=numero;
        if (operador === '/') acumulador /=numero;
        if (operador === '*') acumulador *=numero;
    }
    console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50 )
*/