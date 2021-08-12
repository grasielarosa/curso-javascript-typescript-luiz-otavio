/* Seção 5: JavaScript - Arrays - Avançado
Vídeo nro. 81- aula 62 no git
Revisão do básico em Arrays
 */

/*
//                  0       1         2
const nomes = ['Eduardo', 'Maria', 'Joana'];
console.log(nomes) // [ 'Eduardo', 'Maria', 'Joana' ]
nomes[2] = 'João'; //modificar o valor de um índice
console.log(nomes) // [ 'Eduardo', 'Maria', 'João' ]
delete nomes[1]; // para esvaziar um índice tirá-lo do array
console.log(nomes) // [ 'Eduardo', <1 empty item>, 'João' ]
*/

// * criar arrays com 'new' - construtor - é pouco utilizado, mas bom saber. Serve para strings, objetos, funções, números.
/*
const nomes = new Array('Eduardo', 'Maria', 'Joana')
console.log(nomes)
*/

// Arrays são valores por ---> referência <---, ou seja, qualquer alteração no array reflete no valor da variável. 
/*
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes;

novo.pop(); //exclui o último índice
console.log(nomes); // nomes foi modificado
*/

// Para que isso não aconteça, podemos usar o spread operator, que gera uma copia e modifica essa copia.

/*
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes];

novo.pop();
console.log(nomes); // nomes não foi alterado
console.log(novo)
*/ 

/*
const nomes = ['Eduardo', 'Maria', 'Joana'];
const removido = nomes.pop();
console.log(nomes, removido);
*/

// [ 'Eduardo', 'Maria' ] Joana -> mostra o array com a remoção e o índice' que foi removido.

// shift trabalha no ínicio, excluindo o primeiro item, logo modifica todas as posições dos índices. 

//adicionar item no final = push()

//adicionar item no início = unshift;

// fatiar o array = slice(1,3) -> lembrar que o último número não é excluído, então se eu quero os índices 1 e 2, devo coocar que o corte vai até o 3.

// para usar o slice de trás para frente usamos números negativos. (1, -2)

// converte array em string
/*
const nome = 'Grasiela da Rosa'
const nomes = nome.split(' ') // usando o espaço para separar por palavras
console.log(nomes)
*/

/*
const nome = 'Grasiela da Rosa'
const nomes = nome.split('') // usando vazio para separar por caracteres
console.log(nomes)
*/

// transformar array em string

const nome = [ 'Grasiela', 'da', 'Rosa' ];
const nomes = nome.join(' '); // o separador pode ser o espaço, mas também vírgula, traço, ponto, etc...
console.log(nomes)