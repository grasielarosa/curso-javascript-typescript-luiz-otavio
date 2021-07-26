// Vídeo 60

// Escreva uma função que receba dois números e retorne o maior deles.

// * Minha solução 


const biggestNumber = (num1, num2) => {
    if (num1 > num2){
       return (`O número ${num1} é maior que o número ${num2}.`);
    } else if (num1 === num2){
        return (`Os números são iguais.`);
    }else {
        return (`O número ${num2} é maior que o número ${num1}.`);
    }
}
console.log(biggestNumber(7,3))
console.log(biggestNumber(35,57))
console.log(biggestNumber(7,7))
/*
// Se os números iguais não forem considerados, poderia fazer com ternário

const max = (num1, num2) => {
    return num1 > num2 ? num1 : num2
}
console.log(max(7,3))
console.log(max(35,57))

// Porém, com arrow function., quando a função tem apenas uma linha, não necessito as chaves.

const max2 = (num1, num2) => num1 > num2 ? num1 : num2
console.log(max2(17,13))
console.log(max2(55,97))
*/

// ###############################################

// Vídeo 61

// Escreva uma função chamada ePaisagem que receba dois argumentos (largura e altura) de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

//COM OPERADOR TERNÁRIO
// const ePaisagem = (largura, altura) => largura > altura ? true : false;
// console.log(ePaisagem(17,13))
// console.log(ePaisagem(55,97))

// SIMPLIFICADA -> como a condição por si só já devolve true ou false, não é necessário declarar.
const ePaisagem = (largura, altura) => largura > altura
console.log(ePaisagem(1920,1080))
console.log(ePaisagem(1080,1920))

// ###############################################

// Vídeo 62

// Escreva uma função que recebe um número e retorne o seguinte: Número é divisível por 3 = Fizz; Número é divisível por 5 = Buzz; Número é divisível por 3 e por 5 = FizzBuzz, Número não é divisível por e ou por 5 = retorna o próprio número. Deve checar se o número é realmente um número. Use a função com números de 0 a 100.

//let aleatorio = Math.random() * (100 - 0) + 0;
const fizzBuzz = (num) => {
        if (typeof num !== 'number') return `NaN -> "${num}" não é um número.`
        if (num % 3 === 0 && num % 5 === 0) return `FizzBuzz`;
        else if (num % 3 === 0) return `Fizz`;
        else if (num % 5 === 0 ) return `Buzz`;
        else return num;
        }
    
for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}

// console.log(`com 15:`, fizzBuzz(15))
// console.log(`com 9:`, fizzBuzz(9))
// console.log(`com 20:`,fizzBuzz(20))
// console.log(`com 2:`,fizzBuzz(2))
// console.log(`com string:`,fizzBuzz('a'))