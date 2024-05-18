<?php
$conexion = mysqli_connect("localhost", "js", "js", "js");

if ($conexion->connect_error) {
    die("Fallo al conectar con la base de datos: " . $conexion->connect_error);
}

$sql = "SELECT DISTINCT genero FROM productos";
$result = $conexion->query($sql);

$generos = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $generos[] = $row['genero'];
    }
}

echo json_encode(array("generos" => $generos));

$conexion->close();
?>
