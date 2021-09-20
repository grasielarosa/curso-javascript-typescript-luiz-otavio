/* Seção 8: JavaScript Assíncrono - Promises, Ajax, Fetch e Async/ Await
Vídeo nro. 113
FETCH e Axios
 */

// fetch("pessoas.json")
//   .then((resposta) => resposta.json())
//   .then((json) => carregaElementosNaPagina(json));

axios("pessoas.json").then((resposta) =>
  carregaElementosNaPagina(resposta.data)
);

const carregaElementosNaPagina = (json) => {
  const table = document.createElement("table");

  for (let pessoa of json) {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  }
  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);
};
