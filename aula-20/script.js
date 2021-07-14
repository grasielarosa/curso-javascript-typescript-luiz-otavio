/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 40 e 41 - a partir de aula24 no git
if, else if e else
 */

// * Introdução
/*
 - if pode ser usado sozinho,
 - sempre que utilizo a palavra else preciso necessariamente ter um if antes;
 - eu posso ter vários if na minha checagem;
 - só posso ter um else sozinho no bloco de checagem.
 - podemos fazer condições sem else if e também sem o else.
*/

const hora = 9;
    
if (hora>= 5 && hora<=12){ // avalia true e retorna bom dia
    console.log('Bom dia!');
} else if (hora>12 && hora<=19) {
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}

// segundo vídeo

// const num = 10;

// if (num>=0 && num <=5){
//     console.log('O número está entre 0 e 5.')
// } else if (num>=6 && num <=8){
//     console.log('O número está entre 6 e 8.')
// } else if (num>=9 && num <=11){
//     console.log('O número está entre 9 e 11.')
// } else {
//     console.log('O número não está entre 0 e 11.')
// }

// console.log('... aqui vai o resto do código...')

// *Quando o js encontra uma condição verdadeira, ele a executa e sai do bloco de if e else, não continua executando as outras condições. Para executar duas coisas, teria que colocar um outro if sozinho no início, como a seguir. 

const num = 10;
if (num === 10){
    console.log('o número é 10.')
}
if (num>=0 && num <=5){
    console.log('O número está entre 0 e 5.')
} else if (num>=6 && num <=8){
    console.log('O número está entre 6 e 8.')
} else if (num>=9 && num <=11){
    console.log('O número está entre 9 e 11.')
} else {
    console.log('O número não está entre 0 e 11.')
}

console.log('... aqui vai o resto do código...')
