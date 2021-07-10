/*
Seção 2 - Javascript Básico
Vídeo nro. 22 (aula 11 no github)
alert, confirm e prompt - aula no navegador
 */

/* nota = lembrar que sempre que abrimos parênteses estamos chamando uma função (ou método, no futuro). Assim o alert e o prompt também são funções.
Alert é uma função que está no objeto window. Window é o objeto mãe de todos os objetos. Document é onde está o body - document está dentro de window.
Isso para dizer que alert() é um atalho para wondow.alert() e console.log() é chamar a função log em console, que é um dos objetos que está em window.*/

alert('Uma mensagem linda'); 
confirm('Tem certeza que quer seguir?'); // retorna um boolean, porque aparece o ok (true) e o cancelar (false). 
prompt('Aqui você coloca alguma coisa'); // sempre retorna string, para ser um número dever ser passado passado para number, com Number, parseInnt ou parseFloat

const num1 = prompt('Digite um número');
const num2 = prompt('Digite outro número');
console.log(num1, num2)
const resultado = Number(num1)+Number(num2);
alert(`o resultado sem usar o number seria ${num1+num2}, mas o correto é ${resultado}`)

