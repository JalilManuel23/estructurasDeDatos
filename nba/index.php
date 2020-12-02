<?php require_once("php/conexion.php");

$equipos = mysqli_query($conn, "SELECT * FROM equipo") or die(mysqli_error($conn));
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Fjalla+One&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link href="css/icons.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/normalize.css" rel="stylesheet">
    <link rel="icon" href="img/favicon.png" type="image/png">
    <title>NBA Game Manager</title>
</head>

<body>
    <!-- Encabezado -->
    <nav>
        <div class="nav-wrapper">
            <div class="center-align">
                <div class="centro">
                    <a href="index"><img src="img/nba.png" class="imgheader" alt=""></a>
                    <a href="index" class="txtheader">NBA GAME MANAGER</a>
                </div>
            </div>
        </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
        <li>Redes Sociales</li>
        <li><a class="icon-facebook" href="https://www.facebook.com/nba" target="_blank">Facebook</a></li>
        <li><a class="icon-twitter" href="https://twitter.com/nba?lang=es" target="_blank">Twitter</a></li>
        <li><a class="icon-instagram" href="https://www.instagram.com/nba" target="_blank">Instagram</a></li>
        <li>Hecho por:</li>
        <li>Gerardo Ceseñas Rivera</li>
        <li>Jalil Manuel López Ceniceros</li>
    </ul>
    <!-- Fin de Encabezado -->

    <!-- Menú -->
    <div class="row">
        <div class="col s12">
            <ul class="tabs">
                <li class="tab col s3"><a class="active" href="#menu1">Partidos</a></li>
                <li class="tab col s3"><a href="#menu2">Añadir Partido</a></li>
                <li class="tab col s3"><a href="#menu3">Editar Partido</a></li>
                <li class="tab col s3"><a href="#menu4">Eliminar Partido</a></li>
            </ul>
        </div>
        <!-- Menú Principal -->
        <div id="menu1" class="col s12">
            <img src="img/lebron.png" alt="" class="imgfondo" data-aos="slide-right" data-aos-duration="4000">
            <img src="img/luka.png" alt="" class="imgfondo5" data-aos="slide-left" data-aos-duration="4000">
            <div class="cont-partidos" data-aos="fade-up" data-aos-duration="6000">
                <div class="cont2">
                    <div class="side-tabla">
                        <h3 class="tit2">TABLA DE POSICIONES</h3>
                        <?php require_once("html/tabla_posiciones.html"); ?>
                    </div>
                    <div class="cont-partidos2">
                        <div class="partidosr">
                            <h3 class="tit">PARTIDOS REGISTRADOS: <h3 class="contit" id="tit">0</h3>
                        </div>
                        <div class="line"></div>
                        <div class="partidos-registrados" id="partidos-registrados">
                            <div class="localvis">
                                <p>EQUIPO LOCAL</p>
                                <p>EQUIPO VISITANTE</p>
                            </div>
                            <div class="partidos-registrados2" id="partidos-registrados2">
                            </div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>

            </div>
        </div>
        <!-- Fin de Menú Principal -->

        <!-- Menú de Agregar Partido -->
        <div id="menu2" class="col s12">
            <img src="img/damian.png" alt="" class="imgfondo2" data-aos="slide-right" data-aos-duration="4000">
            <img src="img/rusell.png" alt="" class="imgfondo3" data-aos="slide-left" data-aos-duration="4000">
            <div class="cont-partidos3" data-aos="fade-up" data-aos-duration="6000">

                <div class="cont-tit">
                    <img src="img/titfond.png" alt="" style="width:100%;">
                    <div class="txtcentro">AÑADIR UN PARTIDO</div>
                </div>

                <div class="cont-centro">
                    <div class="contenedor">
                        <div class="local">
                            <h3 class="titt2">EQUIPO LOCAL</h3>
                            <div class="select1" id="uno">
                                <select class="icons" id="equipo1">
                                    <option value="" disabled selected>ELIGE EL EQUIPO LOCAL</option>
                                    <?php
                                    if ($result = mysqli_query($conn, "SELECT * FROM equipo") or die(mysqli_error($conn))) {
                                        if (mysqli_num_rows($result)) {
                                            while ($row = $result->fetch_assoc()) { ?>
                                                <option id="" value="<?php echo $row['nombre']; ?>" data-icon="img/equipos/<?php echo $row['img']; ?>"><?php echo $row['nombre']; ?></option>

                                    <?php }
                                        }
                                    } ?>
                                </select>
                                <pre><?php print_r($row['nombre']); ?></pre>

                            </div>
                        </div>
                        <div class="puntos">
                            <div class="cont3">
                                <div class="pts2" id="puntos1">
                                    <h3 class="titt3">PTS LOCAL</h3>
                                    <input placeholder="" id="puntosl" type="number" class="puntaje" value="0">
                                </div>

                                <div class="pts2" id="puntos2">
                                    <h3 class="titt3">PTS VISITANTE</h3>
                                    <input placeholder="" id="puntosv" type="number" class="puntaje" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="visitante">

                            <h3 class="titt2">EQUIPO VISITANTE</h3>
                            <div class="select1">
                                <select class="icons" id="equipo2">
                                    <option value="" disabled selected>ELIGE EL EQUIPO VISITANTE</option>
                                    <?php
                                    if ($result = mysqli_query($conn, "SELECT * FROM equipo") or die(mysqli_error($conn))) {
                                        if (mysqli_num_rows($result)) {
                                            while ($row = $result->fetch_assoc()) { ?>
                                                <option id="" value="<?php echo $row['nombre']; ?>" data-icon="img/equipos/<?php echo $row['img']; ?>"><?php echo $row['nombre']; ?></option>
                                    <?php }
                                        }
                                    } ?>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="center-align">
                    <button class="waves-effect waves-light btn-large" id="btn" onclick="agregarPartido()">AÑADIR</button>
                </div>
            </div>
        </div>
        <!-- Fin de Menú de Agregar Partido -->

        <!-- Menú de Editar Partido -->
        <div id="menu3" class="col s12">
            <img src="img/james.png" alt="" class="imgfondo4" data-aos="slide-right" data-aos-duration="4000">
            <img src="img/kawhi.png" alt="" class="imgfondo5" data-aos="slide-right" data-aos-duration="4000">
                
            <div class="partidos-registrados3" id="partidos-registrados3"></div>
             <div class="form-editar">
                <select class="icons" id="equipo1-ed">
                    <option value="" disabled selected>ELIGE EL EQUIPO LOCAL</option>
                    <?php
                    if ($result = mysqli_query($conn, "SELECT * FROM equipo") or die(mysqli_error($conn))) {
                        if (mysqli_num_rows($result)) {
                            while ($row = $result->fetch_assoc()) { ?>
                                <option id="" value="<?php echo $row['nombre']; ?>" data-icon="img/equipos/<?php echo $row['img']; ?>"><?php echo $row['nombre']; ?></option>

                    <?php }
                        }
                    } ?>
                </select>
                <div class="pts2" id="puntos1">
                    <h3 class="titt3">PTS LOCAL</h3>
                    <input placeholder="" id="puntosl-ed" type="number" class="puntaje" value="0">
                </div>

                <div class="pts2" id="puntos2">
                    <h3 class="titt3">PTS VISITANTE</h3>
                    <input placeholder="" id="puntos2-ed" type="number" class="puntaje" value="0">
                </div>
                <select id="equipo2-ed">
                    <option value="" disabled selected>ELIGE EL EQUIPO VISITANTE</option>
                    <?php
                    if ($result = mysqli_query($conn, "SELECT * FROM equipo") or die(mysqli_error($conn))) {
                        if (mysqli_num_rows($result)) {
                            while ($row = $result->fetch_assoc()) { ?>
                                <option id="" value="<?php echo $row['nombre']; ?>" data-icon="img/equipos/<?php echo $row['img']; ?>"><?php echo $row['nombre']; ?></option>
                    <?php }
                        }
                    } ?>
                </select>
                <input type="text" id="partido-editar-id" style="display: none;"></input>
                <button class="waves-effect waves-light btn-large" id="btn" onclick="editarPartido()">EDITAR</button>
             </div>               
        </div>

        <!-- Menú de Eliminar -->
        <div id="menu4" class="col s12">
            <img src="img/steph.png" alt="" class="imgfondo6" data-aos="slide-right" data-aos-duration="4000">
            <img src="img/blake.png" alt="" class="imgfondo7" data-aos="slide-right" data-aos-duration="4000">
               
        </div>
    </div>

    <!-- Fin de Menú -->

    <!-- Footer -->

    <!-- Fin de Footer -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script>
        //Inicialización de animaciones
        AOS.init();

        //Inicialización de Sidenav responsivo
        $(document).ready(function() {
            $('.sidenav').sidenav();
        });

        //Inicialización de menú dinámico
        $(document).ready(function() {
            $('.tabs').tabs();
        });

        //Inicialización de campos select
        $(document).ready(function() {
            $('select').formSelect();
        });
    </script>
</body>

</html>