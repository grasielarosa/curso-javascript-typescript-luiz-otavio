/* Seção 8: JavaScript Assíncrono - Promises, Ajax, Fetch e Async/ Await
Vídeo nro. 111
XMLHttpRequest
 */

// const request = (obj) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     //open(metódo (get), a url e se é assíncrono(true ou false são os argumentos))
//     xhr.send();

//     xhr.addEventListener("load", () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

// document.addEventListener("click", (e) => {
//   const el = e.target;
//   const tag = el.tagName.toLowerCase();
//   if (tag === "a") {
//     e.preventDefault();
//     carregaPagina(el);
//   }
// });

// const carregaPagina = (el) => {
//   const href = el.getAttribute("href");

//   const objConfig = {
//     method: "GET",
//     url: href,
//   };

//   request(objConfig)
//     .then((response) => {
//       carregaResultado(response);
//     })
//     .catch((error) => console.log(error));
// };

// const carregaResultado = (response) => {
//   const resultado = document.querySelector(".resultado");
//   resultado.innerHTML = response;
// };

// com async e await

const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

const carregaPagina = async (el) => {
  const href = el.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (e) {
    console.log(e);
  }
};

const carregaResultado = (response) => {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
};
