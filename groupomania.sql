-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 01 juin 2022 à 21:21
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
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `message_send`
--

INSERT INTO `message_send` (`Id`, `text`, `img`, `date`, `user_id`) VALUES
(291, 'Hello World !!????????', NULL, '2022-06-01 15:18:03', 27),
(292, 'Hi !!', NULL, '2022-06-01 15:18:51', 36),
(293, 'test 3', NULL, '2022-06-01 16:57:27', 37);

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
(27, 'Gagno', 'Maxime', '$2b$10$Pp.M77Q.WGjPNQBDOmePEuLyo6ENtXAalNb7FcZaxr13Z8B94E2zu', 'test@test.fr', 1),
(36, 'AZERTY', 'YTREZA', '$2b$10$p/6zskCIhjkBUxI/tbkiRuKgKV48WsJ6AidjDGyV/OSxJEwAtXpsW', 'test2@test2.fr', 0),
(37, 'QSDFGH', 'HGFDSQ', '$2b$10$qqhZbGZS/sGtTmJioowcR.IljyDJEquTVcMHVmVhNHqbGd7VTZES.', 'test3@test3.fr', 0),
(38, 'WXCVBN', 'NBVCXW', '$2b$10$PBDpsOhUoT2vS3g1YFbwz.gHgnmqq/wKuKCWcBk0C.dSntMoeUrAq', 'test4@test4.fr', 0);

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
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `message_send`
--
ALTER TABLE `message_send`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=295;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
