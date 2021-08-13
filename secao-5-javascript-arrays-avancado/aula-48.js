/* Seção 5: JavaScript - Arrays - Avançado
Vídeo nro. 84 aula 65 no git
Filter
 */

// * FILTER SEMPRE RETORNA UM ARRAY COM A MESMA QUANTIDADE DE ELEMENTOS OU MENOS QUE O ORIGINAL.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*
* maneira longa de retornar os números maiores que 10
 - criamos uma função de callback
 *- nesse caso, não estamos usanDo índices nem array, poderia tirá-los, mas deixo para saber que podem estar como parâmetros.

 -  return valor > 10 é o mesmo que criar um if else, mas optamos retornar a condição em si, pois já retorna true ou false. 

 *- colocamos a função de callback como parâmetro, pois é ela quem vai dizer para o filter o que deve ser filtrado.

const callbackFilter = (valor, indice, array) => { 
    return valor > 10;
}
const numerosFiltrados = numeros.filter(callbackFilter);

*/

/*
* versão curta com função anônima.

    const numerosFiltrados = numeros.filter((valor, indice, array) => {
   return valor > 10
    });

* consoles.log dentro da função
 - console.log(valor) -> se vemos esse console log, notamos que ele está funcionando como um for, que imprime cada um dos números do array

- console.log(indice) -> envia cada um dos índices, para quando, por exemplo, eu queria filtrar por índices.

- console.log(array) // a cada iteração, ele envia o array inteiro
*/
// 

/*
* Versão melhorada
- como a função tem só um parâmetro, tiramos os parênteses dele. 

- como a função tem só uma linha, podemos retirar as chaves e o return e expressá-la dessa maneira, muito mais prolixa.
*/
const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados)