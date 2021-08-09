/* Seção 4: JavaScript - Funções - Avançado
Vídeo nro. 75 - aula 56 no git
Funções Fábrica - Factory Function
 */

/* retomando funções que criam objetos.

function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome
    };
}

const p1 = criaPessoa ('Grasiela','Rosa');
console.log(p1);

*/

/*
Quando uma função está dentro de um objeto, chamamos a isso de método.
*/


// Factory Function
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'JS') {
            return `${nome} está falando sobre ${assunto}.`;
        },
        altura: a,
        peso: p,
        //getter - com a palavra get, imc deixa de se comportar como uma função e passa a se comportar como um atributo
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('Maria','Joaquina', 1.8, 80);
const p2 = criaPessoa('Susana','Rafalea', 1.6, 60);
const p3 = criaPessoa('Genivaldo','Lacerda', 1.75, 83);
console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

//console.log(p1.fala('javascript'));
//console.log('Seu imc é:', p1.imc);
// p1.nomeCompleto = 'Luiz Otávio Miranda';
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala())

// const p2 = criaPessoa ('Luiz','Otávio', 1.6, 62);
// console.log(p1)
// console.log(p2)
// console.log(p2.fala('javascript'));


/*
As funções fábrica e construtoras vão fazer a mesma coisa, só precisamos escolher a que preferimos usar. A vantagem é que ao criar a função, mesmo ela sendo longa, para criar novas pessoas posteriormente é apenas replicar os p1, p2, etc...
*/
