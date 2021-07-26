/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 63 - aula 44 no git
Tratando e lançando erros (try, catch, throw)
 */

//console.log(thisVariableDontExist) // isso lança um erro que diz que essa variável não está definida e avisa (js:6) que e o erro está na linha 6.


// * Bloco try faz o teste e o catch lança a mensagem de erro, se esse for o caso

// try {
//     console.log(thisVariable);
// } catch(err) {
//     console.log(`thisVariable não está declarada.`)
// }

/*
É possível prever determinados erros e deixá-los lançados para avisar o usuário.

*/

// const soma = (x, y) => {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw('x e y precisam ser números'); 
//     }
//     return x + y;
// }
// try {
//     console.log(soma(10,15))
//     console.log(soma('10',15))
// } catch(error) {
//     //console.log(error)
//     console.log('Algo mais amigável para o usuário')
// }

// * // aqui pode ser também throw new Error ou throw new ReferenceError ou uma das várias construtoras de erros que são próprias do js.

// * em resumo, se ocorre um erro no bloco try, catch será executado. Se não, try será executado.

// ##########################
/* 
Vídeo nro. 64 - aula 45 no git
Tratando e lançando erros (try, catch, throw) - parte 2
 */

/* 
try {
    * é executada quando não há erros
} catch {
    * é executada quando há erros 
} finally {
    * será executada sempre, mas pode ser omitida.
}

*/

const retornarHora = (data) => {
    if (data && !(data instanceof Date)){
        throw new TypeError ('Esperando instância de Date.')
    }
    if (!data) {
        data= new Date ();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

// const data = new Date ('08-09-1987 5:50:12')
// const hora = retornarHora(data);
// console.log(hora)

try {
    const data = new Date ('08-09-1987 5:50:12')
    const hora = retornarHora();
    console.log(hora)
}catch(error){
    // tratar erro
}finally{
    console.log('Tenha um bom dia')
}

/*
Se deixo o argumento de retornarHora vazio. ele assumirá um new Date, mostrará a hora atual e o finally. 
Se coloco uma data e horário válidos, mostrará o horário e o finally.
Se coloco um string ou outro argumento inválido, somente executará o finally.
*/
