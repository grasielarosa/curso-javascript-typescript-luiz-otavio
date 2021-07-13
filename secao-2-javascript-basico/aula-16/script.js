/*Seção 2 - Javascript Básico
Vídeo nro. 33 - aula18 no git
Objetos - Básico
 */

/*
Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).
*/

const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;

//array criamos com [] e objetos com {}

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

//podemos criar uma função para criar objetos

const criarPessoa = (nome, sobrenome, idade) => {
    return { //as chaves indicam que é um objeto
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa3 = criarPessoa('Grasiela', 'Rosa', 33);// uso os argumentos para criar o objeto

console.log(pessoa3);

// A função que cria objetos é chamada factory

const pessoa4 = criarPessoa('Pablo', 'Alvarez', 40)
const pessoa5 = criarPessoa('João', 'Ferreira', 76)
const pessoa6 = criarPessoa('Leonilde', 'Polidoro', 71)

console.log(pessoa3, pessoa4, pessoa5, pessoa6);

const pessoa7 = {
    nome: 'Jefferson',
    sobrenome: 'Pires',
    idade: 47,

    fala(){
        console.log(`A idade atual de ${this.nome} ${this.sobrenome} é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
        console.log(`Agora minha idade é ${this.idade}`)
    }
};
pessoa7.fala()
pessoa7.incrementaIdade()
pessoa7.fala()
pessoa7.incrementaIdade()
pessoa7.fala()
pessoa7.incrementaIdade()