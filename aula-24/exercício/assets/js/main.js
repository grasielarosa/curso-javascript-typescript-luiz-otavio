/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 48 -  aula30 no git
Exercício com switch e alert
 */

// * ******** maneira com mais código, com o que já aprendemos. ******** 

/*
const h1 = document.querySelector('.container h1');
const data  = new Date();
h1.innerHTML = data.toString();

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


const getMonthName = (numeroMes) => {
    let nomeMes;
    switch (numeroMes) {
        case 0:
            nomeMes = 'janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'março';
            return nomeMes;
        case 3:
            nomeMes = 'abril';
            return nomeMes;
        case 4:
            nomeMes = 'maio';
            return nomeMes;
        case 5:
            nomeMes = 'junho';
            return nomeMes;
        case 6:
            nomeMes = 'julho';
            return nomeMes;
        case 7:
            nomeMes = 'agosto';
            return nomeMes;
        case 8:
            nomeMes = 'setembro';
            return nomeMes;
        case 9:
            nomeMes = 'outubro';
            return nomeMes;
        case 10:
            nomeMes = 'novembro';
            return nomeMes;
        case 11:
            nomeMes = 'dezembro';
            return nomeMes;
        default:
            nomeMes;
    }
}

const zeroAEsquerda = (num) => {
        return num >= 10 ? num : `0${num}`;
    }

const createDate = () => {

    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const diaSemanaTexto = getDayWeek(diaSemana);
    const nomeMes = getMonthName(numeroMes);



    return `${diaSemanaTexto}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}. <br> <br> ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

h1.innerHTML = createDate(data);

*/

// * ******** trocando switch por arrays ******** 

/* const h1 = document.querySelector('.container h1');
const data  = new Date();

const getDayWeek = (diaSemana) => {
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feria', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    return diasSemana[diaSemana];
}
const getMonthName = (numeroMes) => {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro'];
    return meses[numeroMes];
}

const zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`;
}

const createDate = () => {

const diaSemana = data.getDay();
const numeroMes = data.getMonth();

const nomeDia = getDayWeek(diaSemana);
const nomeMes = getMonthName(numeroMes);



return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}. <br> <br> ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

h1.innerHTML = createDate(data)

*/


// * ********  maneira usando as propriedas de date ******** 

/* 
* primeira
const h1 = document.querySelector('.container h1');
const data  = new Date();
const opcoes = {
    dateStyle : 'full',
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
*/

/*
* segunda - perceber que a função muda de toLocaleDateString para toLocaleString
const h1 = document.querySelector('.container h1');
const data  = new Date();
const opcoes = {
    dateStyle : 'full',
    timeStyle : 'short',

};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
*/

/*
 * ******** e finalmente como aparece no MDN ******** 
*/

const h1 = document.querySelector('.container h1');
const data  = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});