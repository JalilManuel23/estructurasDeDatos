-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-12-2020 a las 00:51:35
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

CREATE TABLE `equipo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) DEFAULT NULL,
  `img` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`id`, `nombre`, `img`) VALUES
(1, 'Atlanta Hawks', 'hawks.png'),
(2, 'Boston Celtics ', 'celtics.png'),
(3, 'Brooklyn Nets', 'nets.png'),
(4, 'Charlotte Hornets', 'hornets.png'),
(5, 'Chicago Bulls', 'bulls.png'),
(6, 'Cleveland Cavaliers', 'cavaliers.png'),
(7, 'Dallas Mavericks', 'mavericks.png'),
(8, 'Denver Nuggets', 'nuggets.png'),
(9, 'Detroit Pistons', 'pistons.png'),
(10, 'Golden State Warriors', 'statewarriors.png'),
(11, 'Houston Rockets', 'rockets.png'),
(12, 'Indiana Pacers', 'pacers.png'),
(13, 'Los Angeles Clippers', 'clippers.png'),
(14, 'Los Angeles Lakers', 'lakers.png'),
(15, 'Memphis Grizzlies', 'grizzlies.png'),
(16, 'Miami Heat', 'heat.png'),
(17, 'Milwaukee Bucks', 'bucks.png'),
(18, 'Minnesota Timberwolves', 'timberwolves.png'),
(19, 'New Orleans Pelicans', 'pelicans.png'),
(20, 'New York Knicks', 'knicks.png'),
(21, 'Oklahoma City Thunder', 'citythunder.png'),
(22, 'Orlando Magic', 'magic.png'),
(23, 'Philadephia 76ers', '76ers.png'),
(24, 'Phoenix Suns', 'suns.png'),
(25, 'Portland Trail Blazers', 'trailblazers.png'),
(26, 'Sacramento Kings', 'kings.png'),
(27, 'San Antonio Spurs', 'spurs.png'),
(28, 'Toronto Raptors', 'raptors.png'),
(29, 'Utah Jazz', 'jazz.png'),
(30, 'Washington Wizards', 'wizards.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `equipo`
--
ALTER TABLE `equipo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
