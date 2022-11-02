# Scénario #

Vous êtes développeur depuis plus d'un an chez CONNECT-E, une petite agence web
regroupant une douzaine d'employés.
Votre directrice, Stéphanie, vient de signer un nouveau contrat avec Groupomania, un groupe
spécialisé dans la grande distribution, et l'un des plus Kdèles clients de l'agence.

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le
but de cet outil est de faciliter les interactions entre collègues. Le département RH de
Groupomania a imaginé plusieurs fonctionnalités pour favoriser les échanges entre collègues.

# Spécifications fonctionnelles #

## Page de connexion ##

Une page de connexion permettant à l’utilisateur de se connecter, ou bien
de créer un compte s’il n’en possède pas. Ici il faut demander le minimum
d’informations, la connexion doit se faire à partir de deux éléments : le mail
de l’employé, et un mot de passe. Rien de plus à prévoir pour le moment.
Détails de la fonctionnalité de connexion
● Un utilisateur doit avoir la possibilité de se déconnecter.
● La session de l’utilisateur persiste pendant qu’il est connecté.
● Les données de connexion doivent être sécurisées.

## Page d’accueil ##

La page d’accueil doit lister les posts créés par les différents utilisateurs.
On voudra que les posts soient listés de façon antéchronologique (du plus
récent au plus ancien).
Création d’un post
● Un utilisateur doit pouvoir créer un post.
● Un post doit pouvoir contenir du texte et une image.
● Un utilisateur doit aussi pouvoir modifier et supprimer ses posts.

## Système de like ##

Un utilisateur doit pouvoir liker un post, une seule fois pour chaque post.
Rôle administrateur
Dans le but de pouvoir faire de la modération si nécessaire, il faudra créer
un utilisateur “administrateur” ; celui-ci aura les droits de modification /
suppression sur tous les posts du réseau social. Il faudra donc nous
communiquer les identifiants de cet administrateur.

# Prérequis # 

-Installer sur ca machine au préalable 

	-Nodejs(https://nodejs.org/en/download/)
	
	-Xampp(https://www.apachefriends.org/fr/download.html)
	
	-VsCode(https://code.visualstudio.com/download)	
	
	-lienGitHub(https://github.com/wayne616/GagnoMaxime_7_07042022.git)

Lancer Vscode et installer le fichier github

Lancer un terminale cd front-end 

Lancer un second terminal cd back-end

Installer les nodemodules sur le front-end et le back-end (npm install)

Vérifier si les ports dans le dossier back-end .env correspond bien a votre machine 

Lancer Xampp lancer les serveurs Mysql et Apache 

Click sur Admin (Mysql)

Crée une new base de donées dans phpmyadmin    

Importer le document groupomania.sql du fichier github sur phpmyadmin dans la new base de données crée précédemment

Retourner sur VScode et modifier le dossier back-end .env pour qu'il correspond avec la new base de donées

Lancer les serveurs front-end et back-end avec npm start et nodemon server

Cela va vous rediriger vers la page de connection crées un utilisateur (utilisation de chrome requise )
