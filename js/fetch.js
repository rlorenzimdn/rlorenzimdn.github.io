fetch("../books.json")
  .then((resp) => resp.json())
  .then((data) => {
    const lista = document.querySelector("div");
    data.forEach((post) => {
      const ul = document.createElement("ul");
      ul.innerHTML = `<h4>${post.name}</h4><p>${post.price}</p>`;
      lista.append(ul);
    });
  });