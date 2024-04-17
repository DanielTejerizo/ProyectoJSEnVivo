window.onload = function () {
  crearCabecera();
  Enviar();
};

function crearCabecera() {
  let tabla = document.getElementById("libros");
  tabla.hidden = true; //esconder la tabla
  let theader = document.createElement("thead"); //creamos el thead
  let head = document.createElement("tr"); //creamos la fila
  let celdah1 = document.createElement("th"); //creamos las celdas
  let celdah2 = document.createElement("th");
  let celdah3 = document.createElement("th");
  let celdah4 = document.createElement("th");
  let celdah5 = document.createElement("th");

  celdah1.append("Título"); //metemos lo que queremos que saque
  celdah2.append("Autor");
  celdah3.append("Año publicacion");
  celdah4.append("Género");
  celdah5.append("Ver");

  head.append(celdah1); //metemos las celdas en la fila
  head.append(celdah2);
  head.append(celdah3);
  head.append(celdah4);
  head.append(celdah5);

  theader.append(head); //metemos la fila en el theader
  tabla.append(theader); //metemos el theader en la tabla
  let tbody = document.createElement("tbody"); //creamos el tbody
  tbody.id = "tbody"; //ponemos el id al tbody
  tabla.append(tbody); //metemos el tbody en la tabla
}

function Enviar() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", borrarDatos);
}

function conseguirDatos() {
  fetch("../php/Consulta.php")
    .then((response) => response.json())
    .then((data) => {
      tratarDatos(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function borrarDatos() {
  let titulo = document.getElementById("titulo").value; //valor del input
  let datos = new FormData();
  datos.append("titulo", titulo);
  fetch("../php/Borrar.php")
    .then((response) => response.json())
    .then((data) => {
      tratarDatos(data);
      conseguirDatos();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function tratarDatos(datos) {
    let tabla = document.getElementById("libros");
    tabla.hidden = false; //mostrar tabla
    let tbody = document.getElementById("tbody"); //seleccionar el tbody
    tbody.innerHTML = ""; //limpiar
  
    if (datos && datos.libros) {
      datos.libros.forEach((libro) => {
        //creo celdas
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
          crearImagen(libro); //imagen del libro
        });
        celda5.append(boton);
  
        celda1.append(libro.titulo); //en la celda 1 poner el titulo del libro
        celda2.append(libro.autor); //en la celda 2 poner el autor del libro
        celda3.append(libro.anio_publicacion); //en la celda 3 poner el año de publicacion del libro
        celda4.append(libro.genero); //en la celda 4 poner el genero del libro
        fila.append(celda1); //añadir celdas a las filas
        fila.append(celda2);
        fila.append(celda3);
        fila.append(celda4);
        fila.append(celda5);
  
        tbody.append(fila); //añadir fila al tbody
      });
    }
  }
  
  function crearImagen(libro) {
    //Funcion para sacar imagen debajo
    let divImagen = document.getElementById("libro"); //Crear el div de la imagen
  
    // Limpiar
    divImagen.innerHTML = "";
  
    if (libro.imagen) { //Si existe, que lo haga
      let imagen = document.createElement("img"); //Crear elemento imagen
      imagen.id = "imagen"; //id
      imagen.src = libro.imagen; //src
      imagen.alt = libro.imagen; //alt
      divImagen.append(imagen); //Meter imagen
    }else{
      let aviso=document.createElement("p") //Mensaje de aviso no salida
      aviso.textContent("Sin imagen") //Texto
    }
  
  }