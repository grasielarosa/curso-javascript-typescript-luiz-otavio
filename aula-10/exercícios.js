/*
Exercícios com strings
Video 26
*/

const nome = prompt('Digite o seu nome completo:');
//document.write('Um texto'); // apenas para conhecimento, não se usa em projetos
//window.document.write('Outro texto')// mesma coisa, apenas para entender a estrutura de documentos

document.body.innerHTML = `O seu nome é <strong>${nome}</strong>. <br>`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> caracteres. <br>`;
document.body.innerHTML += `A segunda letra do seu nome é <strong>${nome.charAt(1)}</strong>. <br>`; // nome[1]
document.body.innerHTML += `O primeiro índice da letra "a" no seu nome é <strong>${nome.indexOf('a')}</strong>. <br>`;
document.body.innerHTML += `O último índice da letra "a" no seu nome é <strong>${nome.lastIndexOf('a')}</strong>. <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são <strong>${nome.slice(-3)}</strong>. <br>`;
document.body.innerHTML += `As palavras do seu nome são <strong>${nome.split(' ')}</strong>. <br>`;
document.body.innerHTML += `Seu nome com todas as letras em maiúsculas é <strong>${nome.toUpperCase()}</strong> e com todas em minúsculas é <strong>${nome.toLowerCase()}</strong>.`