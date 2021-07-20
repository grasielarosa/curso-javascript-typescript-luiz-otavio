
/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 55 e 56 
 For in e For of- Estrutura de repetição
 */

 //todo resumo: **** For Clássico -> geralmente com iteráveis (array ou strings); **** FOR IN -> retorna o índice ou chave (string, array, objetos); ****** FOR OF -> retorna o valor em si de iteráveis.

 
 // * FOR IN

 /*
 const frutas = ['pera', 'uva', 'maçã']; // array de única dimensão também é chamado de vetor
 
 for (let indice in frutas) {
     console.log(frutas[indice]); // não é um contador como colocamos com o i++, ele apenas lê cada um dos índices ou chaves.

 }

 const pessoas = {
     nome: "Grasiela",
     sobrenome: "Rosa",
     idade: 33
 }

 for (let chaves in pessoas) {
     console.log(pessoas[chaves])
 }

 */

 // * FOR OF
 // o of devolve o valor e não o índice como o in. Não funciona com objetos.

 const nome = 'Grasiela Rosa' // cada letra é um índice, então a string é iterável

 for (let letra of nome) { 
     console.log(letra)

 }

 const nomes = ['Grasiela', 'Gabriela', 'Luciane', 'Jean']

 for (let nome of nomes) { 
     console.log(nome)

 }

 // *FOR EACH -> apenas para conhecimento
 nomes.forEach(function(elemento, indice, array){
    console.log(elemento, indice, array)
 })

