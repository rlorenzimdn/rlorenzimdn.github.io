fetch("../json/books.json")
  .then((resp) => resp.json())
  .then((data) => {
    let cad = "<tr><th>Nombre del Libro</th><th>Precio en Pesos</th><th>Disponibles</th></tr>";
    for (let usuario of data) {
      cad += `<tr><td>${usuario.name}</td>
                <td>${usuario.price}</td>
                <td>${usuario.stock}</td></tr>`;
    }
    document.getElementById("tabla1").innerHTML = cad;
  });
