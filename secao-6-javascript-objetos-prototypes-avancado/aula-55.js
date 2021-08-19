/* Seção 6: JavaScript - Objetos e Prototypes - Avançado
Vídeo nro. 91 aula 72 no git
Getters e Setters
 */

/*
    Getter para obter valores;

    Setter para cria valores. 
*/

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: true, // configurável
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Mensagem");
      }

      estoquePrivado = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa.", "");
      nome = valor;
    },
  };
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);
// const p2 = criaProduto("Camiseta");
// p2.nome = "Qualquer coisa.";
// console.log(p2.nome);
