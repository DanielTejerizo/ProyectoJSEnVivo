window.onload = function () {
  crearCabecera();
  Enviar();
};

function crearCabecera() {
  let tabla = document.getElementById("libros");
  tabla.hidden = true;
  let theader = document.createElement("thead");
  let head = document.createElement("tr");
  let celdah1 = document.createElement("th");
  let celdah2 = document.createElement("th");
  let celdah3 = document.createElement("th");
  let celdah4 = document.createElement("th");
  let celdah5 = document.createElement("th");

  celdah1.append("Título");
  celdah2.append("Autor");
  celdah3.append("Año publicación");
  celdah4.append("Género");
  celdah5.append("Ver");

  head.append(celdah1);
  head.append(celdah2);
  head.append(celdah3);
  head.append(celdah4);
  head.append(celdah5);

  theader.append(head);
  tabla.append(theader);
  let tbody = document.createElement("tbody");
  tbody.id = "tbody";
  tabla.append(tbody);
}

function Enviar() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", insertarDatos);
}

function insertarDatos() {
  let form = document.getElementById("libroForm");
  let formData = new FormData(form);

  if ([...formData.values()].some(value => value === "")) {
      alert("Rellena todos los campos");
      return;
  }

  fetch("../php/Insertar.php", { method: "POST", body: formData })
      .then(response => response.json())
      .then(data => {
          if (data.error) {
              console.error("Error:", data.error);
          } else {
              alert(data.mensaje);
              conseguirDatos();
          }
      })
      .catch(error => {
          console.error("Error:", error);
      });
}

function conseguirDatos() {
  fetch("../php/Consulta.php")
      .then(response => response.json())
      .then(data => {
          tratarDatos(data);
      })
      .catch(error => {
          console.error("Error:", error);
      });
}

function tratarDatos(datos) {
  let tabla = document.getElementById("libros");
  tabla.hidden = false;
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  if (datos && datos.libros) {
      datos.libros.forEach(libro => {
          let fila = document.createElement("tr");
          let celda1 = document.createElement("td");
          let celda2 = document.createElement("td");
          let celda3 = document.createElement("td");
          let celda4 = document.createElement("td");
          let celda5 = document.createElement("td");
          let boton = document.createElement("button");
          boton.append("Ver");
          boton.addEventListener("click", function () {
              crearImagen(libro);
          });
          celda5.append(boton);

          celda1.append(libro.titulo);
          celda2.append(libro.autor);
          celda3.append(libro.anio_publicacion);
          celda4.append(libro.genero);
          fila.append(celda1);
          fila.append(celda2);
          fila.append(celda3);
          fila.append(celda4);
          fila.append(celda5);

          tbody.append(fila);
      });
  }
}

function crearImagen(libro) {
  let divImagen = document.getElementById("libro");
  divImagen.innerHTML = "";

  if (libro.imagen) {
      let imagen = document.createElement("img");
      imagen.src = libro.imagen;
      imagen.alt = libro.titulo;
      divImagen.append(imagen);
  } else {
      let aviso = document.createElement("p");
      aviso.textContent = "Sin imagen";
      divImagen.append(aviso);
  }
}
