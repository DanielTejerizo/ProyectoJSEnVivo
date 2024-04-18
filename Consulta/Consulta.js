window.onload = function () {
  // Hasta que no haga toda la página
  crearCabecera();
  elegir();
};

function crearCabecera() {
  let tabla = document.getElementById("libros");
  tabla.hidden = true; // esconder la tabla
  let theader = document.createElement("thead"); // creamos el thead
  let head = document.createElement("tr"); // creamos la fila
  let celdah1 = document.createElement("th"); // creamos las celdas
  let celdah2 = document.createElement("th");
  let celdah3 = document.createElement("th");
  let celdah4 = document.createElement("th");
  let celdah5 = document.createElement("th");

  celdah1.append("Título"); // metemos lo que queremos que saque
  celdah2.append("Autor");
  celdah3.append("Año publicación");
  celdah4.append("Género");
  celdah5.append("Ver");

  head.append(celdah1); // metemos las celdas en la fila
  head.append(celdah2);
  head.append(celdah3);
  head.append(celdah4);
  head.append(celdah5);

  theader.append(head); // metemos la fila en el theader
  tabla.append(theader); // metemos el theader en la tabla
  let tbody = document.createElement("tbody"); // creamos el tbody
  tbody.id = "tbody"; // ponemos el id al tbody
  tabla.append(tbody); // metemos el tbody en la tabla
}

function elegir() {
  let botonTitulo = document.getElementById("botonTitulo");
  let botonAutor = document.getElementById("botonAutor");
  let botonAnio = document.getElementById("botonAnio");
  let botonGenero = document.getElementById("botonGenero");

  botonAnio.addEventListener("click", conseguirDatos); // evento para que al hacer click
  botonTitulo.addEventListener("click", conseguirDatos); // evento para que al hacer click
  botonAutor.addEventListener("click", conseguirDatos); // evento para que al hacer click
  botonGenero.addEventListener("click", conseguirDatos); // evento para que al hacer click
}

function conseguirDatos() {
  fetch("../php/Consulta.php")
    .then((response) => response.json())
    .then((data) => {
      let titulo = document.getElementById("titulo").value;
      let autor = document.getElementById("autor").value;
      let anio = document.getElementById("anio").value;
      let genero = document.getElementById("genero").value;

      tratarDatos(data, titulo, autor, anio, genero);
      generarSelect(data); 
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function obtenerTitulos(libro) {
  let titulos = [];

  libro.forEach((obj) => {
    if (!titulos.includes(obj.titulo)) {
      titulos.push(obj.titulo);
    }
  });
  return titulos;
}
function obtenerAutores(libro) {
  let autores = [];

  libro.forEach((obj) => {
    if (!autores.includes(obj.autor)) {
      autores.push(obj.autor);
    }
  });
  return autores;
}
function obtenerGeneros(libro) {
  let generos = [];

  libro.forEach((obj) => {
    if (!generos.includes(obj.genero)) {
      generos.push(obj.genero);
    }
  });
  return generos;
}

function generarSelect(data) {
  // Select titulos
  let selectTitulos = document.getElementById("titulo");
  let titulos = obtenerTitulos(data.libros);

  selectTitulos.innerHTML = "";
  selectTitulos.innerHTML += '<option value="">Seleccionar</option>';

  titulos.forEach((titulo, i) => {
    selectTitulos.innerHTML += `<option value="${titulo}">${titulo}</option>`;
  });

  // Select autores
  let selectAutores = document.getElementById("autor");
  let autores = obtenerAutores(data.libros);

  selectAutores.innerHTML = "";
  selectAutores.innerHTML += '<option value="">Seleccionar</option>';

  autores.forEach((autor, i) => {
    selectAutores.innerHTML += `<option value="${autor}">${autor}</option>`;
  });

  // Select generos
  let selectGeneros = document.getElementById("genero");
  let generos = obtenerGeneros(data.libros);

  selectGeneros.innerHTML = "";
  selectGeneros.innerHTML += '<option value="">Seleccionar</option>';

  generos.forEach((genero, i) => {
    selectGeneros.innerHTML += `<option value="${genero}">${genero}</option>`;
  });
}


function tratarDatos(datos, titulo, autor, anio, genero) {
  let tabla = document.getElementById("libros"); // tabla
  tabla.hidden = false; // mostrar tabla
  let tbody = document.getElementById("tbody"); // seleccionar el tbody
  tbody.innerHTML = ""; // limpiar

  datos.libros.forEach((libro) => {
    // forEach
    if (
      (titulo === "" || libro.titulo === titulo) &&
      (autor === "" || libro.autor === autor) &&
      (anio === "" || libro.anio_publicacion === anio) &&
      (genero === "" || libro.genero === genero)
    ) {
      // creo celdas
      let fila = document.createElement("tr");
      let celda1 = document.createElement("td");
      let celda2 = document.createElement("td");
      let celda3 = document.createElement("td");
      let celda4 = document.createElement("td");
      let celda5 = document.createElement("td");
      let boton = document.createElement("button");
      boton.id = "boton";
      boton.append("Ver");
      boton.addEventListener("click", function () {
        crearImagen(libro); // imagen del libro
      });
      celda5.append(boton);

      celda1.append(libro.titulo); // en la celda 1 poner el titulo del libro
      celda2.append(libro.autor); // en la celda 2 poner el autor del libro
      celda3.append(libro.anio_publicacion); // en la celda 3 poner el año de publicacion del libro
      celda4.append(libro.genero); // en la celda 4 poner el genero del libro
      fila.append(celda1); // añadir celdas a las filas
      fila.append(celda2);
      fila.append(celda3);
      fila.append(celda4);
      fila.append(celda5);

      tbody.append(fila); // añadir fila al tbody
    }
  });
}

function crearImagen(libro) {
  // Funcion para sacar imagen debajo
  let divImagen = document.getElementById("libro"); // Crear el div de la imagen

  // Limpiar
  divImagen.innerHTML = "";

  if (libro.imagen) {
    // Si existe, que lo haga
    let imagen = document.createElement("img"); // Crear elemento imagen
    imagen.id = "imagen"; // id
    imagen.src = libro.imagen; // src
    imagen.alt = libro.imagen; // alt
    divImagen.append(imagen); // Meter imagen
  } else {
    let aviso = document.createElement("p"); // Mensaje de aviso no salida
    aviso.textContent("Sin imagen"); // Texto
  }
}
