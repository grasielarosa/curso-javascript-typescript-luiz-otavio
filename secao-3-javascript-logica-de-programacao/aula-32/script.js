/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 59 - aula 39 no git
Break e continue
 */

// * CONTINUE -> no momento que o laço encontra a palavra continue ele pula para a próxima iteração do laço e deixa de executar o que há abaixo dele; 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {

    if (numero === 2 || numero === 5) {
        console.log('pulei')
        continue;
    }
    console.log(numero)
}

// no caso acima, quando ele encontra o dois e o cinco, ele volta para a iteração sem imprimir o nro 2 e 5, pois o console.log está depois da palavra continue.

// * break -> ela economiza recursos do servidor e melhora a velocidade do código.Por exemplo, ao encontrar o que estou procurando, o break interrompe a execução do laço.

for (let numero of numeros) {

    if (numero === 7) {
        console.log('encontrei o sete e sai')
        break;

    }
    console.log(numero)
}

// nesse caso, ele parou no momento que ele encontrou o 7. 

// TODO em resum, o continue pula para a próxima iteração e segue executando. O break corta o laço e já não executa mais nada. Eles podem ser usados com todos os tipos de FOR e com while e do while.

// * com  while
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

        if (numero === 2 || numero === 5) {
            console.log('pulei');
            i++; // tem que colocar a variável de controle sempre antes de continue ou break para não entrar em um laço infinito.
            continue;
        }
        console.log(numero)

        if (numero === 7) {
            console.log('encontrei o sete e sai');
            i++;
            break;
    
        }
        i++;
    }

    // * com do while
let index = 0;
do{
    let numero = numeros[index];

        if (numero === 7) {
            console.log('pulei');
            index++; // tem que colocar a variável de controle sempre antes de continue ou break para não entrar em um laço infinito.
            continue;
        }
        console.log(numero)

        if (numero === 8) {
            console.log('encontrei o oito e sai');
            index++;
            break;
    
        }
        index++;
    } while (index< numeros.length);