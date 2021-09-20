/* Seção 8: JavaScript Assíncrono - Promises, Ajax, Fetch e Async/ Await
Vídeo nro. 112
FETCH API - get
 */

// mesmo exercício, porém com fetch

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

const carregaPagina = async (el) => {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);
    if (response.status !== 200) throw new Error("ERRO 404!");
    const html = await response.text();
    carregaResultado(html);
  } catch (e) {
    console.log("erroooou");
  }
};

const carregaResultado = (response) => {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
};
