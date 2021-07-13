/*Seção 2 - Javascript Básico
Vídeo nro. 35 - aula20 no git
Exercício para função, array e objeto
 */

const meuEscopo = () => {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    const pessoas = [];

    const recebeEventoForm = (evento) => {
       evento.preventDefault();
       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');

       const dados = {
           nome: nome.value,
           sobrenome: sobrenome.value,
           peso: peso.value,
           altura: altura.value
       }
       pessoas.push(dados)
       resultado.innerHTML += `<p> Nome: ${nome.value} ${sobrenome.value}, peso: ${peso.value} e altura: ${altura.value}.</p>`
       
       console.log(dados);
       console.log(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();

/*
Solução do professor para o push de dados, muito mais simples:
 pessoas.push( {
           nome: nome.value,
           sobrenome: sobrenome.value,
           peso: peso.value,
           altura: altura.value
       });
     

*/

/*  o contador foi uma maneira que o professor nos mostrou como ir vendo o não envio dos formulários.
const meuEscopo = () => {
    const form = document.querySelector('.form');
    
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     console.log('Foi enviado')
    // }; //essa é uma maneira de resolver a atualização da página ao enviar o formulário, mas damos preferência para a próxima.

    let contador = 1;
    const recebeEventoForm = (evento) => {
        evento.preventDefault();
        console.log(`Form não foi enviado ${contador}.`);
        contador++;
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo(); */