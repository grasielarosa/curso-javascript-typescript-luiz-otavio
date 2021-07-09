/* Seção 2 - Javascript Básico
vídeo 14 
Variáveis com Let*/

/*let nome = 'Henrique'; //string

console.log(nome, 'nasceur em 1984.');
console.log('Em 2000,', nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de ', nome, 'chama-se Eduardo.');*/

let nome; //declarei a variável
console.log(nome); // undefined
nome = 'João'; //inicializei a variável
console.log(nome); //João
nome = 'Henrique';//mudei o valor atribuído à variável
console.log(nome); // Henrique


/* Regras / boas práticas para a criação de variáveis:
    - não posso criar variáveis com palavras reservadas;
    - o nome das variáveis não pode começar com um número, let 1nome está errado. Porém, números no nome são permitidos em outras posições:  nome1 é aceito.
    - Não podem conter espaços ou traços; 
    - variáveis devem ter nomes significativos;
    - utilizamos camelCase - primeira palavra com inicial minúscula, seguintes com iniciais maiúsculas;
    - javaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas.
    - não podemos redeclarar variáveis com let - eu posso mudar o valor atribuído à variável, mas não posso declará-la novamente, pois geraria erro e impediria o resto do código de ser executado.
 
*/