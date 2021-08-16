/* Seção 5: JavaScript - Arrays - Avançado
Vídeo nro. 85 aula 66 no git
Função Map
 */
/*
Map tem a mesma estrutura que o filter... vai receber uma função de callback 
O que muda é o retorno final, alterando o valor final com base no primeiro array.
*/

/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => {
    return valor*2
})
console.log(numerosEmDobro)
*/

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Walace", idade: 47 },
];

// apenas retornar os nomes em um array
//const nomesString = pessoas.map((obj) => obj.nome);

//devolve um objeto só com idades utilizando o delete.
/*
const idades = pessoas.map((obj) => {
  delete obj.nome;
  return obj;
});
*/
// devolve um objeto novo criando um novo objeto que contenha apenas os nomes. Para retirar as chaves da função e o visual studio não tomar as chaves do objeto como da função, colocamos entre parênteses.

//const idade2 = pessoas.map((obj) => ({ idade: obj.idade }));

/* adicionar uma chave de id para o objeto. Notar que da maneira seguinte alteramos o objeto original.

const addId = pessoas.map((obj, indice) => {
    obj.id = (indice + 1) *10;
    return obj;
}
    );

console.log(addId);
console.log(pessoas)
*/

// Para que não altere a referência original, usamos o spread.

const addId = pessoas.map((obj, indice) => {
    const newObject = { ...obj};
    newObject.id = (indice + 1) * 100;
    return newObject;
}
    );

console.log(addId);
console.log(pessoas)
