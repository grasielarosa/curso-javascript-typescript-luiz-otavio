/* Seção 4: JavaScript - Funções - Avançado
Vídeo nro. 77 - aula 58 no git
Funções Construtoras
 */

/* 
a função fábrica e a construtora, ambas criam objetos. A diferença é que a fabric é uma função normal que a gente criou e ela retorna um objeto, a gente faz ea retornar um objeto voluntariamente. E a conbstrutora ela já faz muita coisa automaticamente para nós... ela já cria o objeto, retorna o objeto, a única coisa que precisamos fazer é criá-la.
Na função construtora, precisamos mudar a convenção de como escrevemos funções. Precisamos sempre iniciar o seu nome com letra maiúscula e antecedê-la com a palavra new.

fabric function -> const criaPessoa
constructor function -> const new Pessoa

* a palavra new cria um novo objeto vazio, faz o this apontar para esse objeto vazio e retorna automaticamente para a função, por isso não usamos return

*/


function Pessoa(nome, sobrenome) {
    const ID = 123456; // variável privada -> não está disponível fora do objeto
    //const metodoInterno = function() {}; // método privado -> não está disponível fora do objeto.
    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');

    };
}

const p1 = new Pessoa('Grasiela', 'Rosa');
const p2 = new Pessoa('Rosa', 'Grasiela');

console.log(p1.nome);
p2.metodo();

