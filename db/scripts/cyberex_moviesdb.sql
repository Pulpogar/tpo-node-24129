-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-cyberex.alwaysdata.net
-- Generation Time: Jul 03, 2024 at 03:51 PM
-- Server version: 10.6.17-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cyberex_moviesdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `CategoryID` int(11) NOT NULL,
  `CategoryName` varchar(255) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `CreatedAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`CategoryID`, `CategoryName`, `is_active`, `CreatedAt`) VALUES
(1, 'Acción', 1, '2024-06-30 19:08:42'),
(2, 'Comedia', 1, '2024-06-30 17:57:58'),
(3, 'Drama', 1, '2024-06-30 17:57:58'),
(4, 'Terror', 1, '2024-06-30 17:57:58'),
(11, 'Ciencia Ficción', 0, '2024-07-03 13:39:41'),
(12, 'Thriller', 1, '2024-07-03 13:39:16');

-- --------------------------------------------------------

--
-- Table structure for table `directors`
--

CREATE TABLE `directors` (
  `DirectorID` int(11) NOT NULL,
  `DirectorName` varchar(255) NOT NULL,
  `CreatedAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `directors`
--

INSERT INTO `directors` (`DirectorID`, `DirectorName`, `CreatedAt`) VALUES
(1, 'Christopher Nolan', '2024-06-30 18:09:53'),
(2, 'Robert Zemeckis', '2024-06-30 19:06:25'),
(3, 'Todd Phillips', '2024-06-30 18:09:53'),
(4, 'James Cameron', '2024-06-30 18:09:53');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `MovieID` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `MovieImage` varchar(1000) DEFAULT NULL,
  `Synopsis` varchar(1000) DEFAULT NULL,
  `ReleaseYear` year(4) DEFAULT NULL,
  `CategoryID` int(11) DEFAULT NULL,
  `DirectorID` int(11) DEFAULT NULL,
  `CreatedAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`MovieID`, `Title`, `MovieImage`, `Synopsis`, `ReleaseYear`, `CategoryID`, `DirectorID`, `CreatedAt`) VALUES
(1, 'The Dark Knight', 'https://tse2.mm.bing.net/th/id/OIP.iJ0B4QHWW_LdN-wEoTAQLAHaLH?rs=1&pid=ImgDetMain', 'Con la ayuda del teniente Jim Gordon y del Fiscal del Distrito Harvey Dent, Batman mantiene a raya el crimen organizado en Gotham. Todo cambia cuando aparece el Joker, un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.', '2008', 1, 1, '2024-06-30 18:09:53'),
(2, 'Forrest Gump', 'https://www.themoviedb.org/t/p/original/tqfdw48d74spVGmqlZ6rRyOywUM.jpg', 'Sentado en un banco en Savannah, Georgia, Forrest Gump espera al autobús. Mientras éste tarda en llegar, el joven cuenta su vida a las personas que se sientan a esperar con él. Aunque sufre un pequeño retraso mental, esto no le impide hacer cosas maravillosas. Sin entender del todo lo que sucede a su alrededor, Forrest toma partido en los eventos más importantes de la historia de los Estados Unidos.', '1994', 3, 2, '2024-06-30 18:09:53'),
(3, 'The Hangover', 'https://m.media-amazon.com/images/I/91i+dHUDVYL.jpg', 'Dos días antes de su boda, Doug y tres amigos viajan a Las Vegas para una fiesta inolvidable y salvaje. De hecho, cuando los tres acompañantes despiertan la mañana siguiente, no recuerdan nada ni encuentran a Doug. Con poco tiempo por delante, los tres amigos intentan recordar sus pasos y encontrar a Doug para que regrese a Los Ángeles para su boda.', '2009', 2, 3, '2024-06-30 18:09:53'),
(6, 'El laberinto del fauno', 'https://tse4.mm.bing.net/th/id/OIP.1UHMRninoJb36f1UvERzRAAAAA?rs=1&pid=ImgDetMain', 'En la España de 1944, la hijastra de un sádico oficial del ejército escapa a un mundo de fantasía inquietante pero cautivador.', '2006', 1, 1, '2024-07-02 02:13:44'),
(7, 'Mar adentro', 'https://pics.filmaffinity.com/mar_adentro-201709363-large.jpg', 'La historia real de Ramón Sampedro, quien luchó durante treinta años para ganar el derecho a terminar con su vida dignamente.', '2004', 1, 2, '2024-07-02 02:13:44'),
(8, 'Relatos salvajes', 'https://th.bing.com/th/id/R.0101192d1287a68b5c68ceee453bf562?rik=OJVxQEz8%2fhjMlQ&riu=http%3a%2f%2fwww.impawards.com%2fintl%2fmisc%2f2014%2fposters%2frelatos_salvajes_xxlg.jpg&ehk=jFWuh0kdq8wN27szKAJwem03aCkfvxVlo5JV8M0%2fTWQ%3d&risl=&pid=ImgRaw&r=0', 'Seis cortometrajes exploran la violencia y la venganza en diferentes situaciones de la vida cotidiana.', '2014', 2, 3, '2024-07-02 02:13:44'),
(9, 'Amores perros', 'https://tse4.mm.bing.net/th/id/OIP.DmkxlhHU0WUa2pzBLiqj8gHaLH?rs=1&pid=ImgDetMain', 'Tres historias entrelazadas en la Ciudad de México revelan las complejidades de la vida, el amor y la traición.', '2000', 3, 3, '2024-07-02 02:13:44'),
(10, 'El secreto de sus ojos', 'https://th.bing.com/th/id/R.8cd7f32961b15bf1b91218413e74a418?rik=riDuil9EkLoxxQ&riu=http%3a%2f%2fwww.impawards.com%2fintl%2fargentina%2f2009%2fposters%2fel_secreto_de_sus_ojos_ver4.jpg&ehk=HBPnzo1VM66k4RBOwaoLJSwt7LaBRxC3QxmMxdt2oQE%3d&risl=&pid=ImgRaw&r=0', 'Un agente judicial jubilado escribe una novela sobre un caso de violación y asesinato sin resolver en Buenos Aires.', '2009', 2, 3, '2024-07-02 02:13:44'),
(11, 'La comunidad', 'https://pics.filmaffinity.com/la_comunidad-194113063-large.jpg', 'Una agente inmobiliaria descubre una gran suma de dinero en un apartamento y desata una serie de eventos cómicos y oscuros.', '2000', 2, 2, '2024-07-02 02:27:53'),
(12, 'El orfanato', 'https://i.pinimg.com/736x/79/0d/9e/790d9ecb54076306d1196e1f9444bd41.jpg', 'Una mujer vuelve al orfanato donde creció y descubre que su hijo ha comenzado a ver a los mismos amigos imaginarios que ella veía de niña.', '2007', 1, 2, '2024-07-02 02:27:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CategoryID`);

--
-- Indexes for table `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`DirectorID`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`MovieID`),
  ADD KEY `CategoryID` (`CategoryID`),
  ADD KEY `DirectorID` (`DirectorID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `CategoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `directors`
--
ALTER TABLE `directors`
  MODIFY `DirectorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `MovieID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`CategoryID`) REFERENCES `categories` (`CategoryID`),
  ADD CONSTRAINT `movies_ibfk_2` FOREIGN KEY (`DirectorID`) REFERENCES `directors` (`DirectorID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
