-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 07 juil. 2022 à 13:08
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `message_send`
--

CREATE TABLE `message_send` (
  `Id` int(11) NOT NULL,
  `text` varchar(500) DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL,
  `admin` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `message_send`
--

INSERT INTO `message_send` (`Id`, `text`, `img`, `date`, `user_id`, `admin`) VALUES
(314, 'Hello World', NULL, '2022-07-07 10:18:33', 42, 1),
(315, 'Hello World maxime admin', NULL, '2022-07-07 10:18:53', 39, 1),
(316, 'Hi !!', NULL, '2022-07-07 10:19:05', 40, 1),
(317, 'test 3', NULL, '2022-07-07 10:19:18', 41, 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `Id` int(11) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `Prenom` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`Id`, `Nom`, `Prenom`, `Password`, `Email`, `admin`) VALUES
(39, 'Maxime', 'Gagno', '$2b$10$d65I72/nVo7zRMXTpw39hO6AMavp2f0mJZT7Wixs6gM2QgmqA86Qu', 'test@test.fr', 1),
(40, 'aaaa', 'aaaa', '$2b$10$xnfLUaYyranRclJkif4CK.U3rLMf4WzGqk/WUx4967XVU1/.ZIJgm', 'test2@test2.fr', 0),
(41, 'bbbbb', 'bbbbb', '$2b$10$cD5HLrZqT68B5hY3bsfg4urCCOvA431Ba/DUOGwgspep62JVubGs6', 'test3@test3.fr', 0),
(42, 'cccc', 'cccc', '$2b$10$gX7Z.hYBtFk5g3wmj2jk2.arWK0qbTdpY8bKxkNeM4f0xL0aLqtEm', 'test4@test4.fr', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `message_send`
--
ALTER TABLE `message_send`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `user_id_send` (`user_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `admin` (`admin`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `message_send`
--
ALTER TABLE `message_send`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=318;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `message_send`
--
ALTER TABLE `message_send`
  ADD CONSTRAINT `user_id_send` FOREIGN KEY (`user_id`) REFERENCES `user` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
