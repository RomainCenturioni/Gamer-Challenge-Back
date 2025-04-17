# Routes API

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

| Verbe  | Chemin       | Request Body            | Response Body                      | Code (succès) |
| ------ | ------------ | ----------------------- | ---------------------------------- | ------------- |
| GET    | /Category    |                         | Un tableau des categories de défi  | 200           |
| GET    | /Category/:id|                         | Tout les défis d'une catégorie     | 200           |

## Admin

| Verbe  | Chemin           | Request Body           | Response Body       | Code (succès) |
| ------ | ---------------- | ---------------------- | ------------------- | ------------- |
| GET    | /Admin/Jeux      |                        | un tableau de Jeux  | 200           |
| GET    | /Admin/Defis     |                        | un tableau de Défis | 200           |
| POST   | /Admin/Jeux      | les données d'un Jeux  | le Jeux créée       | 201           |
| PATCH  | /Admin/Jeux/:id  | les données à modifier | le Jeux mise à jour | 200           |
| PATCH  | /Admin/Defis/:id | les données à modifier | Défis validé        | 200           |
| DELETE | /Admin/Defis/:id |                        |                     | 204           |
