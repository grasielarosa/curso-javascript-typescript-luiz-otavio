/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 45 - a partir de aula27 no git
Operação ternária
 */

/*
* Operador ternário ( ? : )
utilizado quando há um if e else e só necesita uma linha de código. 
Imaginamos que há um acesso vip e outro normal, e os usuários vip ganham uma flag que os diferenciam de acordo com os pontos que tenham. Se tem mais de 1000 pontos é vip, se não é normal.
Até agora, escreveríamos dessa maneira:

const pontuacaoUsuario = 999;

 if (pontuacaoUsuario >= 1000){
     console.log('Usuário VIP');
 } else {
    console.log('Usuário Normal');
 }

 com um operador ternário, essa é a solução
*/

const pontuacaoUsuario = 1999;
const ehVip = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';


// * (condição) ? 'Valor para true' : 'Valor para false'

const corUsuario = null;
const corPadrao = corUsuario || 'black';

console.log(ehVip, corPadrao);

