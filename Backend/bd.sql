-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 14-02-2023 a las 13:19:11
-- Versión del servidor: 8.0.32-0ubuntu0.20.04.2
-- Versión de PHP: 7.4.3-4ubuntu2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `id` int NOT NULL,
  `username` varchar(20) NOT NULL,
  `pword` varchar(20) NOT NULL,
  `mail` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`id`, `username`, `pword`, `mail`) VALUES
(1, 'enric', '1234', 'enric.guasch@estudiantat.upc.edu'),
(2, 'pau', '1234', 'pau.gimenez@estudiantat.upc.edu'),
(3, 'gerard', '1234', 'gerard.lopez@estudiantat.upc.edu'),
(4, 'oussama', '1234', 'oussama.ayat@estudiantat.upc.edu'),
(5, 'alex', '1234', 'alex.berrocal@estudiantat.upc.edu'),
(6, 'ingrid', '1234', 'ingrid.hinno@estudiantat.upc.edu');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `palabras`
--

CREATE TABLE `palabras` (
  `palabra` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `palabras`
--

INSERT INTO `palabras` (`palabra`) VALUES
('patata'),
('moneda'),
('pato'),
('sonrisa'),
('navidad'),
('coche'),
('ordenador'),
('vaca'),
('zebra'),
('iphone'),
('calculadora'),
('examen'),
('gafas'),
('perro'),
('casa'),
('libro'),
('flor'),
('mesa'),
('silla'),
('auriculares'),
('barco'),
('avion'),
('luna');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidas`
--

CREATE TABLE `partidas` (
  `id` int NOT NULL,
  `juego` int NOT NULL,
  `jugadores` int NOT NULL,
  `fecha` varchar(20) DEFAULT NULL,
  `hora` varchar(20) DEFAULT NULL,
  `ganador` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `partidas`
--

INSERT INTO `partidas` (`id`, `juego`, `jugadores`, `fecha`, `hora`, `ganador`) VALUES
(1, 2, 2, '2022-09-26', '18:32', 'pau'),
(2, 1, 4, '2022-09-26', '18:42', 'pau'),
(3, 2, 3, '2022-09-27', '11:13', 'gerard'),
(4, 2, 3, '2022-09-28', '09:03', 'pau'),
(5, 1, 2, '2022-09-29', '22:45', 'pau');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id_j` int NOT NULL,
  `id_p` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`id_j`, `id_p`) VALUES
(1, 1),
(2, 1),
(2, 4),
(1, 2),
(2, 2),
(5, 2),
(6, 2),
(2, 3),
(3, 3),
(4, 3),
(1, 4),
(4, 4),
(6, 4),
(2, 5),
(3, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `Username` varchar(20) NOT NULL,
  `User_Email` varchar(30) NOT NULL,
  `password` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `rols` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `Username`, `User_Email`, `password`, `rols`) VALUES
(1, 'Adrian', 'Adrian@UPC.com', 'password1234', 'User'),
(2, 'pepe', 'pepe@pepe.com', 'pepe12345', 'User'),
(2, 'pepe', 'pepe1@pepe.com', 'pepe12345', 'User'),
(3, 'pepe', 'pepe1@pepe.com', '[object Promise]', 'User'),
(3, 'pepe', 'pep3@pepe.com', '[object Promise]', 'User'),
(5, 'adrian', 'pepe@gmail.com', '$2b$05$OlwpRyXsLD5Tra.HMv92h.pJEg5RAPD9rsZM/LmXWfHhrwD0rLipu', 'User'),
(5, 'pepe', 'adrian@.gmail.com', '$2b$04$fTNI.hnDKVi5rOVZL1ZboedYczdppWwmCt.JT2hDfquSs.vbI.5p6', 'User');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `partidas`
--
ALTER TABLE `partidas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD KEY `id_j` (`id_j`),
  ADD KEY `id_p` (`id_p`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `registro_ibfk_1` FOREIGN KEY (`id_j`) REFERENCES `jugadores` (`id`),
  ADD CONSTRAINT `registro_ibfk_2` FOREIGN KEY (`id_p`) REFERENCES `partidas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
