/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 53 - aula 35 no git
Exercício - For Clássico - Estrutura de Repetição
 */

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}

];

const container = document.querySelector('.container');
const createDiv = document.createElement('div');

console.log(elementos);
for (let i =0; i < elementos.length; i++){
   let { tag, texto } = elementos[i];
   let createTag = document.createElement(tag);
   let createText = document.createTextNode(texto);

   createTag.appendChild(createText);
   createDiv.appendChild(createTag);
   }

   container.appendChild(createDiv);

