/* Seção 5: JavaScript - Arrays - Avançado
Vídeo nro. 82 aula 63 no git
Método Splice
 */

/*
nomes.splice(parâmetro 1 - o índice que eu quero começar a mexer, parâmetro 2 - Quantos índices eu quero apagar, parâmetro 3 - elementos que quero adicionar no array)
*/

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//podemos simular o pop, excluindo o último elemento
//nomes.splice(4, 1) //4 é o último índiceß, um é quantos eu quero apagar. Poderia ser (-1, 1) que seria a mesma coisa

//const removidos = nomes.splice(-2, 2) // aqui ela devolve um array com os índices que foram removidos

//const removidos = nomes.splice(2, Number.MAX_VALUE) //com o Number.MAX_VALUE estamos dizendo para que remova, a partir do índice 2, tudo o que vier depois.

//const agregar = nomes.splice(3, 0, 'Luiz'); // aqui dizemos que, no 3, não apague nada, mas acrescente o luiz

//const agregar = nomes.splice(3, 1, 'Luiz'); // nesse caso removemos o gabriel e colocamos o luiz no lugar


//simular o push

//nomes.splice(nomes.length, 0, 'Luiz');

console.log(nomes)
