# Presentation

🎮 Structure d’une présentation de projet « Gamer Challenges »

1. 🎯 Introduction

## Gamer Challenges

   Une plateforme de défis pour gamers où chacun peut proposer, relever et voter sur des défis en lien avec ses jeux favoris.

Équipe : # Rôles

- Lead devs : Hugo
- Product Owner : Nicolas
- Scrum master : Romain

### Problématique & Objectif

 Besoins :

Il existe des sites de speedrun (compétitifs), nous souhaitons proposer à la communauté de Gamers une alternative plus "fun" avec des défis toutes catégories, plus orientés vers le divertissement et l'aspect impréssionnant ou marrant d'un défi.
"Gamer Challenges" sera une plateforme où les joueurs de tout niveaux peuvent proposer et/ou réaliser des défis présents sur le site !
La plateforme proposera aussi un système pour classer les défis et réalisations par popularité, dont les votes seront effectués par la communauté.
Les joueurs auront un tableaux de bord avec tous leurs exploits et pourront aussi accèder aux exploits des autres joueurs !

1. Fonctionnalités clés

Organisées par utilisateur :

    Utilisateur

        Créer un compte / Se connecter

        Proposer un défi / réaliser un défi

        Voter pour des défis / des réalisations

        Voir son tableau de progression / Voir celui des autres

    Admin

        Gérer les jeux, les défis

        Valider ou non certaines soumissions

4. 📐 Modélisation & BDD

    MCD (rapide présentation)

    MLD + logique de vos tables (liens, relations, votes, plateformes...)

    Dictionnaire des données (si besoin)

5. 🧑‍💻 Stack technique

    Front : React, TailwindCSS, Axios

    Back : Node.js / Express / API REST

    Base de données : PostgreSQL (ou autre)

    API externe : RAWG.io pour les infos jeux

    Optionnel : Zod, DomPurify, etc. pour sécurité et validation

6. 🖼️ Maquettes (UI/UX)

    Présentez vos maquettes Figma si vous en avez

    Navigation SPA

    Accent sur l’expérience utilisateur (choix de couleurs, layout simple, responsive...)

7. ⚙️ Démo fonctionnelle

    Courte vidéo / live démo si possible

    Exemple de création / validation de défi

    Voter pour une réalisation

    Montrez l'impact visuel (animations, transitions...)

8. 🚧 Difficultés rencontrées & Résolutions

    Auth / sécurité ?

    Gestion des votes uniques ?

    Connexion à l’API RAWG ?

    Filtres / recherche ?

9. 💡 Améliorations / Features futures

    Classements des joueurs

    Système de badges

    Filtrage avancé (plateforme, difficulté, catégorie…)

    Chat entre joueurs ou communauté

10. 🎤 Conclusion

    Ce que vous avez appris

    Retour d’expérience technique & humain

    Et bien sûr… un GG à l’équipe 🎮
