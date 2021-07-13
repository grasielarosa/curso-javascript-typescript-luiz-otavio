/*
Seção 2 - Javascript Básico
Vídeo nro. 20
tipos de dados primitivos
 */

const nome = 'Grasiela'; //string
const nome2 = "Grasiela"; //string
const nome3 = `Grasiela`; //string

const num1 = 10; //number
const num2 = 10.52; //number

let nomaAluno; // variáveis vazias são undefined - não aponta para nenhum valor na memória;
const sobrenomeAluno = null; //nulo não aponta para nenhum local na memória

const aprovado = true; // boolean

console.log(typeof aprovado, aprovado) // quando coloco duas vezes o nome da variável, na primeira mostra o tipo e na segunda o valor.









/*
diferença null e undefined:
A principal diferença é que undefined é a ausência de algo na variável. Ele indica que uma variável nunca foi definida ou que alguém atribuiu undefined para limpar uma variável. Se você usar o typeof verá que o objeto indica ser do tipo "undefined".
Já o nullé um valor nulo atribuído a um objeto. É como se você dissesse que é um objeto, mas que não foi inicializado ainda ou não foi criado. Ele é usado para passar valores padrão de objetos não inicializados. Se você usar o typeof verá que o objeto indica ser do tipo "object".
Na prática, podemos usar o null quando sabemos que em algum momento um valor será sim atribuído, por exemplo, quando selecionarmos algo. A cor do background começa em branco, mas há um select com outras cores e, ao selecionar um deles, muda de let cor = null para let cor = red, por exemplo.
*/



