# MCD

CATEGORIE: titre, decription, couleur
DEFINIR, 1N CATEGORIE, ON DEFIS
JEUX: titre, description, plateforme, date, genre

VALIDER, 0N DEFIS, 11 UTILISATEUR
DEFIS: titre, description, difficulté, status
APPARTENIR, 11 JEUX, ON DEFIS

UTILISATEUR: nom, adresse mail, mot de passe, rôle
SOUMETTRE, 0N DEFIS, 11 UTILISATEUR

PLATEFORME: nom
SUPPORTER, 1N JEU, 0N PLATEFORME
