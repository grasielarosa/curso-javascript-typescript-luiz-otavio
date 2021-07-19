/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 52 - aula33 no git
For - Clássico - Estrutura de Repetição
 */

// i -> index
for (let i = 0; i<=5; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i<=50; i += 10) { //dessa maneira vai saltando de 10 em 10
    console.log(`Linha saltando de 10 em 10 ${i}`);
}

// * começando de valor negativo
for (let i = -100; i <= 500 ; i += 10) {
    console.log(`Linha de valor negativo até positivo ${i}`);
}

// * invertido

for (let i = 500; i >= 400; i -= 10) {
    console.log(`Linha Invertida ${i}`);
}

// * é par?
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0;
    console.log(i, par)
}

// * com ternários
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par': 'ímpar';
    console.log(i, par)
}

// * percorrer arrays
const frutas = ['maçã', 'pêra', 'uva'];
for (let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}`, frutas[1]);

}