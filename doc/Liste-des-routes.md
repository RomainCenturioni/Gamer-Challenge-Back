# Routes API Back

## Games

| Verbe | Chemin     | Request Body | Response Body      | Code (succès) |
| ----- | ---------- | ------------ | ------------------ | ------------- |
| GET   | /Games     |              | Un tableau de Jeux | 200           |
| GET   | /Games/:id |              | Un Jeu             | 200           |


## Challenges

| Verbe  | Chemin         | Request Body           | Response Body        | Code (succès) |
| ------ | -------------- | ---------------------- | -------------------- | ------------- |
| GET    | /Chalenges     |                        | un tableau de Défis  | 200           |
| GET    | /Chalenges/:id |                        | un Défis             | 200           |
| POST   | /Chalenges     | les données d'un défi  | le Defis créée       | 201           |
| PATCH  | /Chalenges/:id | les données à modifier | la Defis mise à jour | 200           |
| DELETE | /Chalenges/:id |                        |                      | 204           |

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
| DELETE | /Admin/Jeux/:id  | Suppression d'un jeu   |                     | 204           |
| PATCH  | /Admin/Defis/:id | les données à modifier | Défis validé        | 200           |
| DELETE | /Admin/Defis/:id |                        |                     | 204           |

# Routes Front

## Home😉

| Verbe | Chemin | Description               |
| ----- | ------ | ------------------------- |
|       | /      | Affiche la page d'accueil |

## Jeux

| Verbe | Chemin    | Description                      |
| ----- | --------- | -------------------------------- |
|       | /Jeux     | Affiche la page de tout les jeux |
|       | /Jeux/:id | Affiche le détail d'un jeu       |

## Défis

| Verbe | Chemin     | Description            |
| ----- | ---------- | ---------------------- |
|       | /Defis     | Affiche tout les défis |
|       | /Defis/:id | Affiche un défi        |

## Catégories

| Verbe | Chemin        | Description                       |
| ----- | ------------- | --------------------------------- |
|       | /Category     | Affiche toutes les catégories     |
|       | /Category/:id | Affiche les défis d'une catégorie |

## Profil

| Verbe | Chemin      | Description                                                       |
| ----- | ----------- | ----------------------------------------------------------------- |
|       | /Profil     | Profile perso / Tableau de bord Utilisateur/Admin (si rôle admin) |
|       | /Profil/:id | Profil public d’un utilisateur                                    |