# Ce qui a été fait

Dés debuts lents le temps de se mettre dans la dynamique (avec l'absence du 4em du groupe).
On a commencé par mettre des infos en vracs.
Au final ce qui a été fait dans l'ordre :

## Choix des technos

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
| DOMPurify     | ✅      | ✅       | ✅      | ✅               | ✅     |

> ✅ : Totalement compatible (aucune restriction majeure)
>
> Les versions indiquées correspondent aux versions **minimales recommandées** pour assurer une expérience utilisateur fluide avec les technologies utilisées dans le projet.

## User stories et route

On est ensuite passer sur les users stories en parallèle de la liste des routes.

## Base de données

Puis nous sommes partit sur le MCD -> MLD -> Dictionnaire des données.

## Elements graphique

On a pu entièrement maquetter notre application, avec en parallèle un petit wireframe, la charte graphique n'a pas encore été rédigé mais on a bien uniformisé notre maquette pour avoir déjà des pages standardisées.

## Ce qui doit être fait

## Niveau document

-Finir la présentation du projet
-La définition des besoins
-le MVP
-Les evolutions potentielles
-La charte graphique

(Globalement rapide à faire étant donnée ce que l'on a déjà finit à coté)

## Ce qui doit etre résolu

Question 1 : Est ce que c'est une bonne idée d'utiliser l'api "RAwg" pour alimenter notre site en jeux différents
