/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 37, 38 e 39 - a partir de aula21 no git
Operadores de comparação e lógicos e Avaliação de curto-circuito - short-circuit
 */


/* 
*Operadores de comparação
>
>=
<
<=
== (igualdade - valor - não recomendável)
=== (igualdade estrita - valor e tipo) 
!= (diferença - valor - não recomendável)
!== (diferença estrita - valor e tipo) 
devolvem true or false
*/

const num1 = 10;
const num2 = 20;
const comp = num1 !== num2;
console.log(comp);

/*
* Operadores lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

const usuario = 'Grasiela';
const senha = '123455';

const vaiLogar = usuario === 'Grasiela' && senha === '12345';
console.log(vaiLogar)

/*
* Avaliação de curto-circuito - short-circuit
vídeo 39
*/

/*
Em javaScript tudo pode ser avaliado em true e false

&& -> false && true -> quando encontra um false retorna "o valor mesmo"

* FALSY Values
       - os valores que avaliam em falso
       - false - falso literal - os outros são falsy, que fingem serem valores falsos
       - 0 - zero
       - " ", '', `` - os strings vazios
       - undefined / null - que não apontam para lugar nenhum
       - NaN  
*/
console.log('Luiz' && undefined && 'Maria');


//Isso pode ajudar a termos códigos mais performáticos

const falaOi = () => {
    return 'oi';
}
const vaiExecutar = ''; //como essa variável é falsa, vai acontecer o curto-circuito e não vai exibir nada, pois o && requer que todos os valores sejam true.

console.log(vaiExecutar && falaOi()); 

/*
|| -> true || false -> vai retorna "o valor verdadeiro". O or precisa de apenas um valor verdadeiro para então retornar esse valor verdadeiro;
*/

console.log(0 || false || null || 'Grasiela' || true); // devolve Grasiela porque é a primeira expressão verdadeira que ele encontra.

const corUsuario = null; // se usuário escolher uma cor, corUsuario passa ter o valor dela e é exibida. 
//const corPadrao = 'red'; // se o usuário não escolhe nenhuma cor, mantém-se a cor padrão.

// * porém poderia ser escrita dessa maneira:
const corPadrao = corUsuario || 'red';
console.log(corPadrao)

// nesse caso, corPadrão retorna red, porém, se modificamos corUsuario para algum valor verdadeiro, retornaria o valor de corUsuário, porque é o primeiro true que encontra.



const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //retorna c, "false", porque por ser uma string, o js avalia como verdadeiro, porque ao encontrar um true, para de avaliar.

console.log(a || b || d || e); // como não encontra nenhuma avaliação verdadeira, retorna a última falsa, porque avalia até o final.