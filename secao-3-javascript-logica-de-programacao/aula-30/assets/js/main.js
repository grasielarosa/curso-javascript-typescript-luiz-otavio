/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 57 - aula 38 no git
 Exercício com Nodelist (browser)
 */

 // no browser podemos acessar os ítens da nodelist como se fossem arrays, selecionando cada parágrafo com seu índice.
 

 const paragrafos = document.querySelector('.paragrafos')
 const ps = document.querySelectorAll('p');

 const estilosBody = getComputedStyle(document.body);
 const backgroundColorBody = estilosBody.backgroundColor;

 for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFF'
    
 }