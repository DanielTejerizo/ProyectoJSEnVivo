<?php
$conexion = mysqli_connect("localhost", "js", "js", "js");

if ($conexion->connect_error) {
    die("Fallo al conectar con la base de datos: " . $conexion->connect_error);
}

// Recibir los datos enviados desde el cliente
$titulo = $_POST['titulo'];
$autor = $_POST['autor'];
$anio_publicacion = $_POST['anio_publicacion'];
$genero = $_POST['genero'];
$imagen = $_POST['imagen'];

// Preparar la consulta SQL de inserción
$sql = "INSERT INTO productos (titulo, autor, anio_publicacion, genero, imagen) VALUES (?, ?, ?, ?, ?)";
$stmt = $conexion->prepare($sql);

// Asociar los parámetros y ejecutar la consulta
$stmt->bind_param("ssiss", $titulo, $autor, $anio_publicacion, $genero, $imagen);

if ($stmt->execute()) {
    // La inserción fue exitosa
    echo json_encode(array("mensaje" => "Datos insertados correctamente"));
} else {
    // Ocurrió un error durante la inserción
    echo json_encode(array("error" => "Error al insertar datos: " . $conexion->error));
}

// Cerrar la conexión
$conexion->close();
?>
