<?php
//Datos conexión a localhost
$servidor = "localhost";
$user = "root";
$pass = "";
$bd = "nba";

// Creando la conexión
$conn = new mysqli($servidor, $user, $pass, $bd);

// Verificando conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

?>