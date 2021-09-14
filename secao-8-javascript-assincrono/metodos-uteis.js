function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);

    setTimeout(() => {
      resolve(msg.toUpperCase() + "- Passei na promise");
    }, tempo);
  });
}

/*
* Promise.all 
Promise.all espera que todas as promises sejam resolvidas (ou a primeira rejeição).
* ler mai aqui: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

const promises = [
  "primeiro valor",
  esperaAi("promise 1", 3000),
  esperaAi("promise 2", 500),
  esperaAi("promise 3", 1000),
  "Outro valor",
];

Promise.all(promises)
  .then(
    (valor = (valor) => {
      console.log(valor);
    })
  )
  .catch(
    (erro = (erro) => {
      console.log("erro");
    })
  );


* Promise.race 
A função race retorna uma Promise que é estabelecida da mesma forma que a primeira promise passada estabelecer. Ela resolve ou rejeita, o que acontecer primeiro. Ou seja, retorna sempre a primeira que resolver.
* ler mais: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

const promises = [
  esperaAi("promise 1", rand(1, 3)),
  esperaAi("promise 2", rand(1, 3)),
  esperaAi("promise 3", rand(1, 3)),
];

Promise.race(promises)
  .then(
    (valor = (valor) => {
      console.log(valor);
    })
  )
  .catch(
    (erro = (erro) => {
      console.log("erro");
    })
  );


* Promise.resolve 

A função estática Promise.resolve retorna uma Promise de que será resolvida.

* Ler mais: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve

function baixaPagina() {
  const emCache = false; // se estivesse true entraria na primeira condição

  if (emCache) {
    return Promise.resolve("Página em cache");
  } else {
    return esperaAi("Baixei a página", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));


* Promise.reject
O método Promise.reject(motivo) retorna um objeto Promise que é rejeitada com um dado motivo (Motivo pelo qual este Promise foi rejeitado.)
Para fins de debug e captura de erros seletiva, é útil que o motivo seja uma instanceof Error.

* Ler mais: 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject

! IMPORTANTE
RESOLVE cai no then e REJECT cai no catch
*/

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Página em cache");
  } else {
    return esperaAi("Baixei a página", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("ERRO", e));
