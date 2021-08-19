/* Seção 6: JavaScript - Objetos e Prototypes - Avançado
Vídeo nro. 90 aula 71 no git
Object.defineProperty() e Object.defineProperties()
 */

/*

Servem para definir regras para os objetos, o que deve ou não aparecer, por exemplo.

* A diferença deles está apenas em que o priemiro define regras apenas para uma chave e o segundo pode definir para várias chaves ao mesmo tempo.

Object.defineProperty()
* recebe três parâmetros --> o nome do objeto, o nome da chave e o objeto com as regras.

* enumerable true mostra a chave, se estiver como false não irá aparecer nem em object keys nem será iterado en for in. 

* value é o valor dessa chave, no caso do exemplo, o parâmetro estoque. Pode ser uma função, por exempo. É qualquer valor que definamos.

* writable é sobre se podemos ou não editar o valor da chave. Se está como false e colocamos um p1.estoque = 5, o valor não será atualizado.

* configurable é sobre a possibilidade de editar a chave em si. Se está false e eu tento deletar a chave estoque, não me permitirá, porém se estiver com true, sim.

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: false,
  });
}

const p1 = new Produto("camiseta", 20, 3);
console.log(p1);

*/

/*
Object.defineProperties()
* Recebe como parâmetros o objeto em si, logo um novo objeto com todas as chaves dentro, e nessas chaves os objetos com as regras.
*/

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: false,
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}

const p1 = new Produto("camiseta", 20, 3);
console.log(p1);
