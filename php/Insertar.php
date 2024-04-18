<?php
$conexion = mysqli_connect("localhost", "js", "js", "js");

if ($conexion->connect_error) {
    die("Fallo al conectar con la base de datos: " . $conexion->connect_error);
}

$titulo = $_POST['titulo'];
$autor = $_POST['autor'];
$anio_publicacion = $_POST['anio_publicacion'];
$genero = $_POST['genero'];
$imagen = $_POST['imagen'];

$sql = "INSERT INTO productos (titulo, autor, anio_publicacion, genero, imagen) VALUES (?, ?, ?, ?, ?)";
$stmt = $conexion->prepare($sql);

$stmt->bind_param("ssiss", $titulo, $autor, $anio_publicacion, $genero, $imagen);

if ($stmt->execute()) {
    echo json_encode(array("mensaje" => "Datos insertados correctamente"));
} else {
    echo json_encode(array("error" => "Error al insertar datos: " . $conexion->error));
}

$conexion->close();
?>
