/*
Seção 2 - Javascript Básico
Vídeo nro. 17
ecercícios const e let
 */

/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 de altura e seu IMC é de 25.92.
Luiz Otávio nasceu em 1991.
*/

const nome = "Luiz Otávio"; //nome não muda, então usamos const
const sobrenome = "Miranda"; //sobrenome tampouco muda, usamos const
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;

let indiceMassaCorporal; //peso/(altura*altura)
let anoNascimento;

indiceMassaCorporal = peso /(alturaEmM * alturaEmM);
const imcArredondado = Number(indiceMassaCorporal.toFixed(2));
anoNascimento = 2021 - idade;

console.log(indiceMassaCorporal, anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade}, pesa ${peso}, tem ${alturaEmM} de altura e seu IMC é de ${imcArredondado}. ${nome} ${sobrenome} nasceu em ${anoNascimento}.`)


