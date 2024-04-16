<?php
$conexion = mysqli_connect("localhost", "js", "js", "js");

if ($conexion->connect_error) {
    die("Fallo al conectar con la base de datos: " . $conexion->connect_error);
}

$titulo = $_POST['titulo'];

$sql = "DELETE FROM productos WHERE titulo = ?";

$stmt = $conexion->prepare($sql);

$stmt->bind_param("s", $titulo);

if ($stmt->execute()) {
    echo json_encode(array("mensaje" => "Datos eliminados correctamente"));
} else {
    echo json_encode(array("error" => "Error al eliminar datos: " . $conexion->error));
}

$conexion->close();
?>
