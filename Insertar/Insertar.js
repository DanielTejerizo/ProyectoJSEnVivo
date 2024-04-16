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
    let boton = document.getElementById("boton")
    boton.addEventListener("click", insertarDatos);
}

function insertarDatos() {

    let datos = {
        titulo: "Título del libro",
        autor: "Autor del libro",
        anio_publicacion: 2024,
        genero: "Género del libro",
        imagen: "URL de la imagen"
    };

    // Configuración de la solicitud Fetch
    fetch("../php/Insertar.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Manejar la respuesta del servidor
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
