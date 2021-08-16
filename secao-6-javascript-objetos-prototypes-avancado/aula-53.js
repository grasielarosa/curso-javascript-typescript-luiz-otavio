/* Seção 6: JavaScript - Objetos e Prototypes - Avançado
Vídeo nro. 89 aula 70 no git
Revisão objetos
 */

/* --> criar objetos - maneira literal

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
};
*/

/*geralmente buscamos com notação de ponto
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
*/

/* mas notação de colchete pode ser interessante quando os valores venham de banco de dados, por exemplo.
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
*/

/*
criar objetos através de construtores. Os dois dão exatamente o mesmo resultado. Damos preferência para o literal, mas em algumas situações são importantes.


const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Otávio";
const pessoa2 = {
  nome: "Luiz",
  sobrenome: "Otávio",
};

console.log(pessoa1, pessoa2);
*/

/* apagamos chaves dentro de objetos utilizando o delete

const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Otávio";

delete pessoa1.nome; 
console.log(pessoa1);
*/

/*
* Também vimos métodos, que são as funções dentro dos objetos.
    const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Otávio";
pessoa1.idade = 30;
pessoa1.falarNome = function () {
  return `${this.nome} está falando o seu nome.`;
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
  console.log(`--> ${chave}`); // para saber as chaves que estão no objeto
}

for (let chave in pessoa1) {
  console.log(`**** ${pessoa1[chave]}`); // para saber os valores das chaves que estão no objeto
}
*/

/*
 * Também vimos como criar o 'molde' que cria novos objetos automaticamente com factory e constructor functions. Também estão as classes, que ainda não vimos.

-- é interessante pensar em utilizar sempre uma ou outra no mesmo programa. Evitar misturar num mesmo projeto.

*--> Factory
const criaPessoa = (nome, sobrenome) => {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
};
const p1 = criaPessoa("Luiz", "Otávio");
console.log(p1);
console.log(p1.nomeCompleto);


*--> Constructor
    - a palavra new vai criar um objeto vazio ({}) e atrelar a palavra this a este novo objeto, isso é, sempre que eu criar uma nova pessoa, o this vai tomar como referência esse novo objeto. E por fim, retorna o novo objeto criado.
        function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        }
        const p1 = new Pessoa("Grasiela", "Rosa");
        p1.nome = "outra coisa";
        const p2 = new Pessoa("Rosa", "Grasiela");
        console.log(p1, p2);

    - ao usar p1.nome não alteramos o valor da constante. Alteramos o valor do valor da constante, por isso que não é preciso usar let.

    * caso eu queira proibir que o objeto seja alterado, usamos o freeze.

        const p3 = new Pessoa("Leonilde", "Polidoro");
        Object.freeze(p3);
        p3.nome = "outra coisa";
        console.log(p3); ********* não altera o nome **********
    
    - para congelar todos os objetos criados através dessa construtora.
        function Pessoa2(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;

        Object.freeze(this);
        }


    * congelamos o this e isso trava a função. Isso é perigoso porque não posso alterar nem acrescentar nada. Se quero acrescentar idade, por exemplo, não permitirá. Delete tampouco funcionará.
    
    * Freeze também funciona com arrays.


*/
