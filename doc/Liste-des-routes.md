# Routes API Back

## Home😉

| Verbe | Chemin | Request Body | Response Body | Code (succès) |
| ----- | ------ | ------------ | ------------- | ------------- |
| GET   | /      |              |               | 200           |

## Jeux

| Verbe  | Chemin          | Request Body | Response Body      | Code (succès) |
| ------ | --------------- | ------------ | ------------------ | ------------- |
| GET    | /Jeux           |              | Un tableau de Jeux | 200           |
| GET    | /Jeux/:id       |              | Un Jeu             | 200           |
| DELETE | /Admin/Jeux/:id |              |                    | 204           |

## Défis

| Verbe  | Chemin     | Request Body            | Response Body        | Code (succès) |
| ------ | ---------- | ----------------------- | -------------------- | ------------- |
| GET    | /Defis     |                         | un tableau de Defis  | 200           |
| GET    | /Defis/:id |                         | un Defis             | 200           |
| POST   | /Defis     | les données d'une Defis | la Defis créée       | 201           |
| PATCH  | /Defis/:id | les données à modifier  | la Defis mise à jour | 200           |
| DELETE | /Defis/:id |                         |                      | 204           |

## Catégories

| Verbe | Chemin        | Request Body | Response Body                     | Code (succès) |
| ----- | ------------- | ------------ | --------------------------------- | ------------- |
| GET   | /Category     |              | Un tableau des categories de défi | 200           |
| GET   | /Category/:id |              | Tout les défis d'une catégorie    | 200           |

## Admin

| Verbe  | Chemin           | Request Body           | Response Body       | Code (succès) |
| ------ | ---------------- | ---------------------- | ------------------- | ------------- |
| POST   | /Admin/Jeux      | les données d'un Jeux  | le Jeux créée       | 201           |
| PATCH  | /Admin/Jeux/:id  | les données à modifier | le Jeux mise à jour | 200           |
| PATCH  | /Admin/Defis/:id | les données à modifier | Défis validé        | 200           |
| DELETE | /Admin/Defis/:id |                        |                     | 204           |

# Routes Front

## Home😉

| Verbe | Chemin | Description               |
| ----- | ------ | ------------------------- |
| GET   | /      | Affiche la page d'accueil |

## Jeux

| Verbe | Chemin    | Description                      |
| ----- | --------- | -------------------------------- |
| GET   | /Jeux     | Affiche la page de tout les jeux |
| GET   | /Jeux/:id | Affiche le détail d'un jeu       |

## Défis

| Verbe | Chemin     | Description            |
| ----- | ---------- | ---------------------- |
| GET   | /Defis     | Affiche tout les défis |
| GET   | /Defis/:id | Affiche un défi        |

## Catégories

| Verbe | Chemin        | Description                       |
| ----- | ------------- | --------------------------------- |
| GET   | /Category     | Affiche toutes les catégories     |
| GET   | /Category/:id | Affiche les défis d'une catégorie |

## Profil

| Verbe | Chemin  | Description                                       |
| ----- | ------- | ------------------------------------------------- |
| GET   | /Profil | Tableau de bord Utilisateur/Admin (si rôle admin) |
