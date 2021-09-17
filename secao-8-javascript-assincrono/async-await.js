// toda essa função com setTimeout de valor randon é para simular uma petição que não sabemos quanto demoraria para ser entregue
function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("caí no erro");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

// no exemplo abaixo, ele espera que un se realize para então realizar o próximo. Isto é, executa a fase 1 no tempo rando, e só depois começa a executar a fase 2 em tempo randon.
/*
esperaAi("fase 1", rand()).then((valor) => {
  console.log(valor);
  return esperaAi("fase 2", rand()).then((valor2) => {
    console.log(valor2);
    return esperaAi("fase 3", rand())
      .then((valor3) => {
        console.log(valor3);
      })
      .catch((e) => console.log(e));
  });
});
*/

/*
com async e await acontece o mesmo, mas sem a necessidade de aninhar um monte de then.

async function executa() {
  const fase1 = await esperaAi("fase 1", rand());
  console.log(fase1);

  const fase2 = await esperaAi("fase 2", rand());
  console.log(fase2);

  const fase3 = await esperaAi("fase 3", rand());
  console.log(fase3);

  console.log("terminamos na fase", fase3);
}

executa();
*/

/*
mesmo código anterior, mas usando o try e o catch, com erro para testar
*/

async function executa() {
  try {
    const fase1 = await esperaAi("fase 1", rand());
    console.log(fase1);

    const fase2 = await esperaAi("fase 2", rand());
    console.log(fase2);

    const fase3 = esperaAi("fase 3", rand());
    console.log(fase3);

    setTimeout(function () {
      console.log(
        "essa promise estava pendente e quando tentei outra vez deixou de estar",
        fase3
      );
    }, 1100);

    const fase4 = await esperaAi(4, rand());
    console.log(fase4);

    console.log("terminamos na fase", fase4);
  } catch (e) {
    console.log(e);
  }
}

executa();

/*
! importante saber:
as promises têm, geralmente, 3 status: 
* pendente / pending -> 
se tiramos o await de alguma das linhas a serem executadas, será retornado isso: Promise { <pending> }. 
Simulamos com o setTimeout dentro da função.

* fullfilled 
que é o mesmo que resolvida

* reject
que é a rejeitada
*/
