/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 51 - aula33 no git
atribuição via desestruturação - objetos
 */

const pessoa = {
    nome: 'Grasiela',
    sobrenome: 'Rosa',
    idade: 33,
    endereco: {
        rua: 'La Font',
        numero: 112
    }
}
//const nome = pessoa.nome; // atribuição normal
//const { nome, sobrenome, idade } = pessoa; // atribuição por desestruturação
//console.log(nome, sobrenome, idade);

// * quando a propriedade não existe

//const { nome, sobrenome, nascimento = 1987} = pessoa;
//console.log(nome, sobrenome, nascimento);

// * modificar nome da propriedade
// const { nome: teste, sobrenome, idade } = pessoa;
// console.log(teste, sobrenome, idade);

// * pegar o objeto dentro do objeto
//const { endereco } = pessoa; -> aparece o objeto completo
//console.log(endereco);

// const { endereco: {rua, numero} } = pessoa;
// console.log(rua, numero);

//* modificar o valor

// const { endereco: {rua: r = 'teste', numero} } = pessoa; // teste assume se não há valor em rua no objeto
// console.log(r, numero);

// * utilizando resto
const { nome, ...resto} = pessoa;
console.log(resto); // aparece tudo menos o nome
