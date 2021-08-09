/* Seção 4: JavaScript - Funções - Avançado
Vídeo nro. 74 - aula 55 no git
Funções Imediatas (IIFE) ou autoinvocadas
 */

// IIFE - imediately invoked function expression
// o que queremos com essas funções é que elas se executem imediatamente sem tocar o escopo global.

/*
(function(){ //crio a função anônima dentro de parêntes
    const nome = "Grasiela"; // escrevo minha função normalmente
})(); // com os parênteses chamo ela imediatamente.

const nome = 'outro nome' // essa constante nunca será um problema para o escopo porque a função autoinvocada não toca o escopo global

*/

// toda esta função está protegida do escopo global

(function(idade, peso, altura) {
    const sobrenome = 'Rosa';
    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }
    function falaNome() {
        console.log(criaNome('Grasiela'))
    }

    falaNome();
    console.log(idade, peso, altura)

})(33, 88, 1.70);

const nome = 'outro nome'

// em resumo abre parêntes e cria a função dentro. No final da função, já com os parêntes fechados, abre e fecha parênteses outra vez. Os últimos podem estar vazios ou com parâmetros.