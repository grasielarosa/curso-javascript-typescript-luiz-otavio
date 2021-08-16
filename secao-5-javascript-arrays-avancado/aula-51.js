/* Seção 5: JavaScript - Arrays - Avançado
Vídeo nro. 87 aula 68 no git
Filter + Map + Reduce
 */

//retorne a soma do dobro de todos os pares;
// -> filtrar pares //
// -> dobrar os valores
// -> reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/* --> separa os pares
const numerosPares = numeros.filter(valor => valor % 2 === 0)
console.log(numerosPares); // [ 50, 80, 2, 8, 22 ]

--> multiplica Pares
const multiplicaPares = numerosPares.map(valor => valor * 2)
console.log(multiplicaPares) //[ 100, 160, 4, 16, 44 ]

--> soma os pares multiplicados
const total = multiplicaPares.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador
}, 0);
console.log(total) // 324


* Agora a versão com todas elas trabalhando juntas:
*/

const total = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => {
    return acumulador + valor;
  }, 0);
console.log(total);
