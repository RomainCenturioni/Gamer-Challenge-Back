import { Game, Platform, Challenge, User, Realization, Category } from '../models/associations.js';
import { sequelize } from '../models/client.js';

await Game.bulkCreate(
    [
        {
        title: "Diablo IV",
        description: "Diablo IV est un jeu vidéo d'action-RPG de type hack 'n' slash développé par Blizzard Entertainment. Il constitue le quatrième épisode principal de la série Diablo, faisant suite à Diablo III sorti en 2012",
        release: "2023",
        kind: "RPG",
        Platforms: [
            {name: "PlayStation"},
            {name: "Xbox"},
            {name: "PC"},
        ]},
        {
        title: "Rocket League",
        description: "Rocket League est un jeu vidéo développé et édité par Psyonix. Il sort en juillet 2015 sur Windows et sur PlayStation 4, en février 2016 sur Xbox One, en septembre 2016 sur Linux et Mac, en novembre 2017 sur Nintendo Switch et en octobre 2021 sur PlayStation 5.",
        release: "2015",
        kind: "Course, Football",
        Platforms: [
            {name: "PlayStation"},
            {name: "Xbox"},
            {name: "PC"},
            {name: "Nintendo Switch"}
        ]},
        {
        title: "Alex Kidd",
        description: "Alex Kidd est une série de jeux vidéo créée par Sega en 1986 avec le jeu Alex Kidd in Miracle World. Elle met en scène le personnage Alex Kidd, qui sera la mascotte de Sega avant Sonic.",
        release: "1986",
        kind: "Plateforme",
        Platforms: [
            {name: "Sega Mégadrive"}
        ]},
    ], { include: Platform });

    

    await sequelize.close();