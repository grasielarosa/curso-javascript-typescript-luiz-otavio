/*Seção 2 - Javascript Básico
Vídeo nro. 30 - aula16 no git
Arrays - Básico
 */

/*
são listas de coisas (objetos, strings, numbers, funções, etc), separadas por vírgulas. Se forem strings, entre aspas.
Arrays são indexados, como strings, porém não por seus valor. Eles são indexados por elementos.
*/


const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// editar array
alunos[0] = 'Eduardo'; //substituiu o valor de 0, tirou luiz e colocou eduardo
console.log(alunos);

alunos[3] = 'Grasiela'; //agregou um índice a mais.
console.log(alunos);

console.log(alunos.length); //tamanho do índice (de 0 a 3 = 4 posições);
// com length também se pode adicionar quando não se sabe o nro de indices

alunos[alunos.length] = 'Pablo';
console.log(alunos);

alunos.push('Fernando'); //adiciona no final
console.log(alunos);

alunos.unshift('Joana'); // adiciona como primeiro índice
console.log(alunos);
alunos.unshift('Gil');
console.log(alunos);

alunos.pop(); //excluiu o último índice
console.log(alunos);

// podemos salvar o nome que vamos excluir com pop em outra variável
const removido = alunos.pop();
console.log(alunos);
console.log(removido);

const removido2 = alunos.shift(); //remove do início
console.log(alunos);
console.log(removido2);

// toda edição altera a posição dos índices. Para não modificar os índices, podemos usar o delete, que não apaga a posição, mas o conteúdo
console.log(alunos);
delete alunos[1];
console.log(alunos);

//posso buscar um índice que não existe e o javaScript retorna o valor indefinido.

console.log(alunos[50]);
alunos[1] = 'Eduardo';
console.log(alunos);

console.log(alunos.slice(0,3)); // corta no sentido da leitura
console.log(alunos);
console.log(alunos.slice(0, -3)); // corta do final para o começo;

console.log(typeof alunos) //array é indexado como objeto, para ter certeza que estamos trabalhando com arrays, devemos usar
console.log(alunos instanceof Array);




