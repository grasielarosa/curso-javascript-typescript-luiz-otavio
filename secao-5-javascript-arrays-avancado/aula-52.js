/* Seção 5: JavaScript - Arrays - Avançado
Vídeo nro. 88 aula 69 no git
forEach
 */
// forEach é apenas uma outra maneira de iterar sobre um array, mais objetiva na hora de escrever.

const a1 = [10, 20, 30];

/*o que vinhamos utilizando até agora

for (let valor of a1) {
    console.log(valor);
}
*/

// a1.forEach((valor, indice, array) => {
//     console.log(valor, indice, array)
// })

// a1.forEach((valor, indice, array) => {
//     console.log(array[indice]);
// })

//simulando reduce com forEach

let total = 0;
a1.forEach((valor) => {
  total += valor;
});
console.log(total);
