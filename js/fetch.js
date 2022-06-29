fetch("../books.json")
  .then((resp) => resp.json())
  .then((data) => {
    const bookList = document.querySelector("div");
    data.forEach((post) => {
      const ul = document.createElement("ul");
      ul.innerHTML = `<h4>${post.name}</h4><p>`+'Precio: '+`${post.price}</p><p>`+'Disponible: '+`${post.stock}</p>`;
      bookList.append(ul);
    });
  });