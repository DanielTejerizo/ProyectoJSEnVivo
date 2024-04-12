window.onload = function () {
    //Hasta que no haga toda la pagina
    crearCabecera();
  }

  function crearCabecera() { //Creamos la cabecera
    let cabecera = document.getElementById("Cabecera") //lo metemos en el div
    let enlace1 = document.createElement("a") //creamos los enlaces
    let enlace2 = document.createElement("a")
    let enlace3 = document.createElement("a")
    enlace1.textContent="Insertar" //texto
    enlace1.href="#" //href
    enlace2.textContent="Borrar" //texto
    enlace2.href="#" //href
    enlace3.textContent="Consultar" //texto
    enlace3.href="Consulta/Consulta.html" //href

    
    cabecera.append(enlace1) //metemos los enlaces en el div
    cabecera.append(enlace2)
    cabecera.append(enlace3)

    cabecera.style.textAlign = "center"; //estilo
    enlace1.style.marginRight = "10px";
    enlace2.style.marginRight = "10px";
  }