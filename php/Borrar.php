<?php
$conexion = mysqli_connect("localhost", "js", "js", "js");

if ($conexion->connect_error) {
    die("Fallo al conectar con la base de datos: " . $conexion->connect_error);
}

// Recibir el título enviado desde el cliente
$titulo = $_POST['titulo'];

// Preparar la consulta SQL de eliminación
$sql = "DELETE FROM productos WHERE titulo = ?";

// Preparar la declaración
$stmt = $conexion->prepare($sql);

// Asociar los parámetros y ejecutar la consulta
$stmt->bind_param("s", $titulo);

if ($stmt->execute()) {
    // La eliminación fue exitosa
    echo json_encode(array("mensaje" => "Datos eliminados correctamente"));
} else {
    // Ocurrió un error durante la eliminación
    echo json_encode(array("error" => "Error al eliminar datos: " . $conexion->error));
}

// Cerrar la conexión
$conexion->close();
?>
