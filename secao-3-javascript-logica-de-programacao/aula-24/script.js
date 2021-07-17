/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 47 - a partir de aula27 no git
Switch / Case
 */

/*

*/

const data = new Date();
const diaSemana = data.getDay();



// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'segunda-feira';
//         break;
//     case 2:
//         diaSemanaTexto = 'terça-feira';
//         break;
//     case 3:
//         diaSemanaTexto = 'quarta=feira';
//         break;
//     case 4:
//         diaSemanaTexto = 'quinta-feira';
//         break;
//     case 5:
//         diaSemanaTexto = 'sexta-feira';
//     case 6:
//         diaSemanaTexto = 'sábado';
//         break;
//     default:
//         diaSemanaTexto;
// }

// console.log(diaSemana, diaSemanaTexto);


// * fazendo em formato de função

const getDayWeek = (diaSemana) => {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta=feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto;
    }
}

const diaSemanaTexto = getDayWeek(diaSemana);
console.log(diaSemanaTexto);