/*Seção 2 - Javascript Básico
Vídeo nro. 25
Mais sobre Strings
 */

/*
Strings com expressões regulares
*/

let umaString = "Um texto";
let outraString = 'O rato roeu a roupa do rei de roma.'

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/g/)); // devolve o índice em que encontrou a letra, se não encontra devolve -1
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.replace(/Um/, 'Outro'));
console.log(outraString.replace(/r/ , '#'));
console.log(outraString.replace(/r/g , '#'));

/*
Strings 
*/
console.log(outraString.length);
console.log(outraString.slice(2, 6)); //de onde começa a cortar até onde terminar. Não aparece o último. 
console.log(outraString.slice(-5)); // ao usar negativo, encontra o índice de trás para frente e logo corta o que veio antes.
console.log(outraString.slice(-5, -1));
console.log(outraString.substring(outraString.length - 5, outraString.length - 1)); // mesma coisa que usar slice negativo
console.log(outraString.split('r'));
console.log(outraString.split(' ', 3));



