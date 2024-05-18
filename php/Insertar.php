<?php
$conexion = mysqli_connect("localhost", "js", "js", "js");

if ($conexion->connect_error) {
    die("Fallo al conectar con la base de datos: " . $conexion->connect_error);
}

$titulo = $_POST['titulo'];
$autor = $_POST['autor'];
$anio_publicacion = $_POST['anio_publicacion'];
$genero = $_POST['genero'];
$imagen = $_FILES['imagen'];

$target_dir = "../Img/";
$target_file = $target_dir . basename($imagen["name"]);
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
$check = getimagesize($imagen["tmp_name"]);

if ($check !== false) {
    if (move_uploaded_file($imagen["tmp_name"], $target_file)) {
        $imagen_url = $target_file;
        $sql = "INSERT INTO productos (titulo, autor, anio_publicacion, genero, imagen) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("ssiss", $titulo, $autor, $anio_publicacion, $genero, $imagen_url);

        if ($stmt->execute()) {
            echo json_encode(array("mensaje" => "Datos insertados correctamente"));
        } else {
            echo json_encode(array("error" => "Error al insertar datos: " . $conexion->error));
        }
    } else {
        echo json_encode(array("error" => "Error al subir la imagen."));
    }
} else {
    echo json_encode(array("error" => "El archivo no es una imagen."));
}

$conexion->close();
?>
