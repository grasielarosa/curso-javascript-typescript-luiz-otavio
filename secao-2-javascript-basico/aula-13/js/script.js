/*Seção 2 - Javascript Básico
Vídeo nro. 29
Exercícios com numbers e Math
 */

const numero = Number(prompt('Digite um número.'));
const numeroTitulo = document.getElementById("numero-titulo");
numeroTitulo.innerHTML = `<h1>O seu número é <span>${numero}</span></h1>`;

const texto = document.getElementById('texto');
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>` 
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>A raíz quadrada é ${Math.sqrt(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para baixo é: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para cima é: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais é: ${numero.toFixed(2)}.</p>`;


