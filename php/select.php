<?php
$conexion = mysqli_connect("localhost", "js", "js", "js");

if ($conexion->connect_error) {
    die("Fallo al conectar con la base de datos: " . $conexion->connect_error);
}

$sql = "SELECT titulo, genero, autor FROM productos";
$result = $conexion->query($sql); 

$libros = array(); 

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $libros[] = array(
            'titulo' => $row['titulo'],
            'genero' => $row['genero'],
            'autor' => $row['autor']
        ); // Agrega título, género y autor al array
    }
} else {
    echo json_encode(array("error" => "No se encontraron libros."));
}

$conexion->close(); 

echo json_encode(array("libros" => $libros)); // Devuelve los libros con título, género y autor en formato JSON
?>
