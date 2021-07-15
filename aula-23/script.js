/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 46 - a partir de aula27 no git
Objeto Date
 */

/*
o objeto date é uma função construtora - que ainda não vimos. Nesse momento, apenas grifar que para usar o objeto date, precisamos usar o new antes e que ela sempre começa com letra maiúscula, como no exemplo a seguir .
*/

/*
const data0 = new Date(0); // 01/01/1970 Timestamp unix ou época unix
console.log(data0.toString());

const dataAtual = new Date(); // atual
console.log(dataAtual.toString());

const umDia = 60 * 60 * 24 * 1000; //porque em js tudo é em milissegundos
const dataMais1 = new Date(0 + umDia);
console.log(dataMais1.toString());
*/


/*
const data = new Date(2021, 8, 8, 15, 10, 28) // (ano, mês, dia, hora, minuto, segundo) mês começa do zero (0 -> janeiro e 11 -> dezembro)
console.log(data.toString());
*/

/*
// outra maneira - o formato mais utilizado
const data = new Date('2021-09-08  15:10:28.100') // enviando através de string em formato oficial.
console.log(data.toString());
console.log('Dia', data.getDate()); // para pegar o dia da data
console.log('Mês', data.getMonth()+1); //meses começa do zero então precisamos agregar um
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milissegundos', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // dias da semana começam a contar na segunda, então 3 é quarta-feira

console.log(Date.now()); // mostra os milissegundos do marco zero até o momento em que é chamado. Eventualmente encontraremos 'new Date (milissegundos)' representando a hora atual. 
*/

const zerAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`;
}
const data = new Date();
const formataData = (data) => {
    const dia = zerAEsquerda(data.getDate());
    const mes = zerAEsquerda(data.getMonth()+1);
    const ano = zerAEsquerda(data.getFullYear());
    const hora = zerAEsquerda(data.getHours());
    const minuto = zerAEsquerda(data.getMinutes());
    const segundos = zerAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`;
}


const dataEspania = formataData(data);

console.log(dataEspania);