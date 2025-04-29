# Par où commencer ?

## Organisations

- user-stories
- MCD
- MLD

## Outils

### Application en SPA

Permet un site réactif qui plaira à la cible visée (site pas trop complexe et rapide)

### Choix des technos pour le back

- Express : Permet d'utiliser le JS en back
- Postgres : Base de donnée relationnelle qui répond aux besoins de l'application
- Sequelize : permet une meilleure gestion de la base de donnée (POO)
- Requetes préparées : eviter les injections SQL

### Choix des technos pour le front

- Typescript : typage des variables et donc moins d'erreur possible
- REACT : Librairie pratique, facile à mettre en place, cohérente avec une SPA
- Tailwind : Classe très précises, en plus on a pas besoin de faire de fichier CSS
- Vite : Configuration rapide et cohérent avec REACT
- axios : plus lisible que fetch (moins dense), meilleur gestion des erreurs
- DOMPurify : Nettoyer le code avant de l'afficher en innerHTML (pour eviter les faille XSS)

Rechercher un API gratuite de liste de jeux
"RAWG"

## Compatibilité des navigateurs

| Technologie   | Chrome | Firefox | Safari | Edge (Chromium) | Opera |
| ------------- | ------ | ------- | ------ | --------------- | ----- |
| TypeScript    | 61+    | 60+     | 11+    | 79+             | 48+   |
| React         | 49+    | 45+     | 10+    | 79+             | 36+   |
| Tailwind CSS  | 60+    | 55+     | 11+    | 79+             | 45+   |
| Vite (output) | 61+    | 60+     | 11+    | 79+             | 48+   |
| Axios         | 49+    | 45+     | 10+    | 79+             | 36+   |
| DOMPurify     | ✅      | ✅       | ✅      | ✅             | ✅     |

> ✅ : Totalement compatible (aucune restriction majeure)
>
> Les versions indiquées correspondent aux versions **minimales recommandées** pour assurer une expérience utilisateur fluide avec les technologies utilisées dans le projet.

## MLD

CATEGORIE : id_categorie (PK), titre, description, couleur

UTILISATEUR: id_utilisateur (PK), nom, adresse_mail, mot_de_passe,

JEUX: id_jeu (PK), titre, description, plateforme, date, genre,

DEFIS: id_defis (PK), titre, description, difficulte, id_categorie (FK → CATEGORIE.id_categorie)

APPARTENIR (relation JEUX - DEFIS)
id_jeu (PK, FK → JEUX.id_jeu)

id_defis (PK, FK → DEFIS.id_defis)

VALIDER (relation DEFIS - UTILISATEUR, 0,N - 1,1)
id_defis (PK, FK → DEFIS.id_defis)

id_utilisateur (FK → UTILISATEUR.id_utilisateur)

SOUMETTRE (relation DEFIS - UTILISATEUR, 0,N - 1,1)
id_defis (PK, FK → DEFIS.id_defis)

id_utilisateur (FK → UTILISATEUR.id_utilisateur)
