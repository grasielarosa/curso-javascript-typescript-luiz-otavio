/*Seção 2 - Javascript Básico
Vídeo nro. 27 - no git aula14
Mais sobre Numbers
 */

let num1 = 1; //number
let num2 = 2.5; // number
let num3 = 1500
let num4 = 10.5763095

console.log(num1 + num2); // comportamento por defeito
console.log(num1.toString() + num2); // converte para string temporariamente, mas não modifica o typeof da variável num1.
console.log(typeof num1);
num1 = num1.toString(); // dessa maneira a variável é modificada
console.log(typeof num1);
console.log(num3.toString(2)); //apresenta o valor binário do número
console.log(num4.toFixed(2)); // apresenta apenas duas casas decimais
console.log(Number.isInteger(num3)); //para saber se o número é inteiro ou não, por exemplo, quando o número vem de uma base de dados que eu desconheço. Devolve true ou false
let temp = num1 * 'Olá'; // essa conta gera uma variável com valor NaN
console.log(temp)
console.log(Number.isNaN(temp)); //para saber se é NaN. Devolve true ou false.

/*
O JavaScript segue o padrão IEEE 754-2008, que é sobre a precisão dos números, o que gera uma pequena imprecisão como no exemplo a seguir.
*/
let num5 = 0.7;
let num6 = 0.1;
num5 += num6; // resultado 0.99999999999......
num5 = num5.toFixed(); //devolve 1
console.log(num5);
console.log(Number.isInteger(num5)) // devolve false, porque ele verifica o número original, não o que visualizamos como inteiro.
// uma possível solução para que a soma seja precisa será usando parseFloat ou Number

let num7 = 0.7;
let num8 = 0.1;
num7 +=num8; //0.8
console.log(num7);
num7 +=num8; //0.9
console.log(num7);
num7 +=num8; //1
console.log(num7);
num7 = Number(num7.toFixed(2)); //solução
console.log(num7);
console.log(Number.isInteger(num7));

//outra solução, mais complexa, seria multiplicar os números por 100 e logo dividir por 100
let num9 = 0.7;
let num10 = 0.1;
num9 =((num9 *100) + (num10*100)) / 100; //0.8
console.log(num9)
num9 =((num9 *100) + (num10*100)) / 100; //0.0
console.log(num9)
num9 =((num9 *100) + (num10*100)) / 100; //1
console.log(num9)


