import sequelize from "../models/client.js";
import { Platform, Game, Challenge, Category, Realization, User } from "../models/associations.js";
import { UserLikeChallenge } from "../models/userlikechallenge.model.js";
import { UserLikeRealization } from "../models/userlikerealization.model.js";

const platforms = [
  { name: "PlayStation 5" },
  { name: "PlayStation 4" },
  { name: "Xbox Series X|S" },
  { name: "Xbox One" },
  { name: "PC" },
  { name: "Nintendo Switch" },
  { name: "Nintendo 3DS" },
  { name: "PlayStation Vita" },
  { name: "Steam Deck" },
  { name: "Sega Mega Drive" },
  { name: "Super Nintendo (SNES)" },
  { name: "Nintendo Entertainment System (NES)" },
  { name: "Game Boy" },
  { name: "Game Boy Advance" },
  { name: "Nintendo DS" },
  { name: "Wii U" },
  { name: "Wii" },
  { name: "PlayStation 3" },
  { name: "Xbox 360" },
  { name: "PlayStation 2" },
  { name: "GameCube" },
  { name: "Dreamcast" },
  { name: "Atari 2600" },
  { name: "Commodore 64" },
];

const games = [
  {
    title: "Alex Kidd",
    description: "Alex Kidd est une série de jeux vidéo créée par Sega en 1986 avec le jeu Alex Kidd in Miracle World. Elle met en scène le personnage Alex Kidd, qui sera la mascotte de Sega avant Sonic.",
    release: "1986",
    kind: "Plateforme",
    img: "",
    platforms: [10], // Sega Mega Drive
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    description: "Un jeu d’action-aventure en monde ouvert développé par Nintendo, acclamé pour sa liberté et son gameplay innovant.",
    release: "2017",
    kind: "Action-Aventure",
    img: "",
    platforms: [6, 16], // Nintendo Switch, Wii U
  },
  {
    title: "Super Mario Bros.",
    description: "Un classique de Nintendo qui a défini le genre plateforme à sa sortie sur NES.",
    release: "1985",
    kind: "Plateforme",
    img: "",
    platforms: [12, 14, 6], // NES, GBA, Switch
  },
  {
    title: "Halo: Combat Evolved",
    description: "Un FPS révolutionnaire développé par Bungie, qui a lancé la franchise Halo sur Xbox.",
    release: "2001",
    kind: "FPS",
    img: "",
    platforms: [4, 5, 19], // Xbox One, PC, Xbox 360
  },
  {
    title: "Final Fantasy VII",
    description: "Un RPG culte de Square Enix qui a popularisé le genre en Occident.",
    release: "1997",
    kind: "RPG",
    img: "",
    platforms: [1, 2, 4, 5, 6, 8], // PS5, PS4, Xbox One, PC, Switch, Vita
  },
  {
    title: "The Witcher 3: Wild Hunt",
    description: "Un RPG en monde ouvert acclamé pour son histoire et sa richesse narrative.",
    release: "2015",
    kind: "RPG",
    img: "",
    platforms: [1, 2, 3, 4, 5, 6], // PS5, PS4, Xbox Series X, Xbox One, PC, Switch
  },
  {
    title: "Tetris",
    description: "Un jeu de puzzle soviétique culte qui est devenu un phénomène mondial.",
    release: "1984",
    kind: "Puzzle",
    img: "",
    platforms: [6, 12, 13, 5], // Switch, NES, Game Boy, PC
  },
  {
    title: "Minecraft",
    description: "Un jeu sandbox de construction et survie immensément populaire.",
    release: "2011",
    kind: "Sandbox",
    img: "",
    platforms: [2, 3, 4, 5, 6], // PS4, Xbox Series X, Xbox One, PC, Switch
  },
  {
    title: "Grand Theft Auto V",
    description: "Un jeu d’action-aventure en monde ouvert développé par Rockstar Games.",
    release: "2013",
    kind: "Action-Aventure",
    img: "",
    platforms: [1, 2, 3, 4, 5, 18, 19], // PS5, PS4, Xbox Series X, Xbox One, PC, PS3, Xbox 360
  },
  {
    title: "Red Dead Redemption 2",
    description: "Un western vidéoludique en monde ouvert salué pour son réalisme et sa narration.",
    release: "2018",
    kind: "Action-Aventure",
    img: "",
    platforms: [1, 2, 3, 4, 5], // PS5, PS4, Xbox Series X, Xbox One, PC
  },
  {
    title: "Doom",
    description: "Un FPS pionnier sorti en 1993 qui a marqué l’histoire du jeu vidéo.",
    release: "1993",
    kind: "FPS",
    img: "",
    platforms: [2, 5, 6, 11, 12], // PS4, PC, Switch, SNES, NES
  },
  {
    title: "Metal Gear Solid",
    description: "Un jeu d’infiltration emblématique de Hideo Kojima sorti sur PlayStation.",
    release: "1998",
    kind: "Infiltration",
    img: "",
    platforms: [5, 8, 18, 21], // PC, PS Vita, PS3, GameCube
  },
  {
    title: "Resident Evil",
    description: "Un jeu de survie et d’horreur qui a lancé une saga culte.",
    release: "1996",
    kind: "Survival Horror",
    img: "",
    platforms: [5, 6, 10, 18, 21], // PC, Switch, Mega Drive, PS3, GameCube
  },
  {
    title: "Fortnite",
    description: "Un jeu de bataille royale multijoueur devenu phénomène culturel.",
    release: "2017",
    kind: "Battle Royale",
    img: "",
    platforms: [2, 3, 4, 5, 6], // PS4, Xbox Series X, Xbox One, PC, Switch
  },
  {
    title: "Street Fighter II",
    description: "Un jeu de combat qui a révolutionné le genre dans les années 90.",
    release: "1991",
    kind: "Combat",
    img: "",
    platforms: [2, 6, 10, 11], // PS4, Switch, Mega Drive, SNES
  },
  {
    title: "Pokémon Rouge et Bleu",
    description: "Les jeux originaux Pokémon qui ont lancé une franchise mondiale.",
    release: "1996",
    kind: "RPG",
    img: "",
    platforms: [6, 7, 13], // Switch, 3DS, Game Boy
  },
  {
    title: "Call of Duty: Modern Warfare",
    description: "Un FPS moderne connu pour son réalisme et son mode multijoueur.",
    release: "2007",
    kind: "FPS",
    img: "",
    platforms: [4, 5, 17, 18, 19], // Xbox One, PC, Wii, PS3, Xbox 360
  },
  {
    title: "Animal Crossing: New Horizons",
    description: "Un jeu de simulation de vie relaxant sur Nintendo Switch.",
    release: "2020",
    kind: "Simulation",
    img: "",
    platforms: [6], // Switch
  },
  {
    title: "Dark Souls",
    description: "Un action-RPG connu pour sa difficulté impitoyable et son level design.",
    release: "2011",
    kind: "Action-RPG",
    img: "",
    platforms: [2, 4, 5, 6, 18, 19], // PS4, Xbox One, PC, Switch, PS3, Xbox 360
  },
  {
    title: "Chrono Trigger",
    description: "Un RPG culte de la Super Nintendo avec un système de combat innovant.",
    release: "1995",
    kind: "RPG",
    img: "",
    platforms: [5, 7, 11, 14, 15], // PC, 3DS, SNES, GBA, DS
  },
];

const challenges = [
  {
    title: "Speedrun sur Alex Kidd in Miracle World",
    description: "Termine le jeu en moins de 30 minutes sans perdre de vie.",
    difficulty: "Medium",
    game: [1],
    category: [2], // Speedrun
    user: [2], // Killer75 (Admin)
  },
  {
    title: "Trouver tous les sanctuaires dans Zelda: Breath of the Wild",
    description: "Explore chaque recoin d’Hyrule pour débloquer les 120 sanctuaires.",
    difficulty: "Hard",
    game: [2],
    category: [2], // Speedrun
    user: [2], // ShadowX
  },
  {
    title: "Terminer Super Mario Bros. sans utiliser de warp zones",
    description: "Parcours tous les niveaux dans l’ordre sans tricher.",
    difficulty: "Medium",
    game: [3],
    category: [3], // 100% Completion
    user: [3], // PixelMaster
  },
  {
    title: "Finir Halo: Combat Evolved en Légendaire",
    description: "Revis le premier épisode de la saga en difficulté maximale.",
    difficulty: "Hard",
    game: [4],
    category: [5], // Hardcore Mode
    user: [4], // RoguePlayer
  },
  {
    title: "Battre l'arme émeraude dans Final Fantasy VII",
    description: "Un boss optionnel redoutable qui mettra ta stratégie à l’épreuve.",
    difficulty: "Hard",
    game: [5],
    category: [5], // Hardcore Mode
    user: [5], // GameLord23
  },
  {
    title: "Terminer The Witcher 3 sans utiliser de potions",
    description: "Un défi pour les puristes qui mise tout sur l’habileté au combat.",
    difficulty: "Hard",
    game: [6],
    category: [6], // Minimalist
    user: [6], // ProGamer007
  },
  {
    title: "Obtenir tous les succès dans Tetris",
    description: "Un défi de précision, de vitesse et de stratégie.",
    difficulty: "Medium",
    game: [7],
    category: [10], // Achievement Hunter
    user: [7], // NinjaXtreme
  },
  {
    title: "Construire une base sous-marine dans Minecraft",
    description: "Utilise ta créativité pour établir une base fonctionnelle sous l’océan.",
    difficulty: "Medium",
    game: [8],
    category: [3], // 100% Completion
    user: [8], // BattleKing
  },
  {
    title: "Voler un avion de chasse et échapper à 5 étoiles dans GTA V",
    description: "Un défi d’action et de timing dans le ciel de Los Santos.",
    difficulty: "Medium",
    game: [9],
    category: [4], // No Damage
    user: [9], // MasterChief77
  },
  {
    title: "Chasser un animal légendaire dans Red Dead Redemption 2",
    description: "Traque et élimine une bête mythique dans les grands espaces américains.",
    difficulty: "Medium",
    game: [10],
    category: [7], // Solo
    user: [10], // EliteGamer
  },
  {
    title: "Terminer Halo: Combat Evolved sans mourir",
    description: "Revis le premier épisode de la saga sans faire une seule erreur.",
    difficulty: "Hard",
    game: [4],
    category: [1], // Permadeath
    user: [2], // ShadowX (deux défis attribués ici)
  },
  {
    title: "Obtenir tous les animaux de compagnie dans Animal Crossing: New Horizons",
    description: "Attrape chaque animal de compagnie disponible dans le jeu.",
    difficulty: "Medium",
<<<<<<< HEAD
    game: [18],
=======
    game: [9],
>>>>>>> liaison-api-externe
    category: [3], // 100% Completion
    user: [7], // NinjaXtreme (deux défis attribués ici)
  },
];

const users = [
  {
    name: "Killer75",
    password: "lolilol75",
    email: "killer75@progamer.fr",
    role: "Admin",
  },
  {
    name: "ShadowX",
    password: "shadowx123",
    email: "shadowx@gamezone.com",
    role: "User",
  },
  {
    name: "PixelMaster",
    password: "pixelmaster321",
    email: "pixelmaster@onlinegamer.net",
    role: "User",
  },
  {
    name: "RoguePlayer",
    password: "rogueplayer456",
    email: "rogueplayer@esportplayer.com",
    role: "User",
  },
  {
    name: "GameLord23",
    password: "gamelord23",
    email: "gamelord23@challengetech.org",
    role: "User",
  },
  {
    name: "ProGamer007",
    password: "pro007gamer",
    email: "progamer007@arcadezone.com",
    role: "User",
  },
  {
    name: "NinjaXtreme",
    password: "ninjaxtreme789",
    email: "ninjaxtreme@esportacademy.com",
    role: "User",
  },
  {
    name: "BattleKing",
    password: "battleking100",
    email: "battleking@gameworld.net",
    role: "User",
  },
  {
    name: "MasterChief77",
    password: "chiefmaster77",
    email: "masterchief77@gaminghub.com",
    role: "User",
  },
  {
    name: "EliteGamer",
    password: "elitegamer11",
    email: "elitegamer@playzone.co",
    role: "User",
  },
];

const categories = [
  {
    title: "Permadeath",
    description: "Une seule vie. Si tu meurs, tu recommences tout.",
    color: "#8B0000",
  },
  {
    title: "Speedrun",
    description: "Terminer le jeu dans un temps record, sans aucun retard.",
    color: "#FF8C00",
  },
  {
    title: "100% Completion",
    description: "Compléter le jeu à 100%, en débloquant toutes les missions et collectibles.",
    color: "#228B22",
  },
  {
    title: "No Damage",
    description: "Finir le jeu sans subir de dégâts.",
    color: "#4169E1",
  },
  {
    title: "Hardcore Mode",
    description: "Un mode de jeu particulièrement difficile, avec des ennemis plus forts et moins de ressources.",
    color: "#800080",
  },
  {
    title: "Minimalist",
    description: "Terminer le jeu en utilisant le moins d’objets, d’armes ou de ressources possibles.",
    color: "#708090",
  },
  {
    title: "Solo",
    description: "Jouer sans aucun coéquipier ou aide extérieure.",
    color: "#2F4F4F",
  },
  {
    title: "No Items",
    description: "Finir le jeu sans utiliser aucun objet pendant l’aventure.",
    color: "#A52A2A",
  },
  {
    title: "Randomizer",
    description: "Jeu où les objets, ennemis et événements sont aléatoirement générés.",
    color: "#DA70D6",
  },
  {
    title: "Achievement Hunter",
    description: "Vise à obtenir tous les succès/achievements disponibles dans le jeu.",
    color: "#FFD700",
  },
];

const realizations = [
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [1], // Challenge ID pour "Speedrun sur Alex Kidd in Miracle World"
<<<<<<< HEAD
    user: [2], // ShadowX
=======
    user: [2, 4], // ShadowX et RoguePlayer
>>>>>>> liaison-api-externe
  },
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [2], // Challenge ID pour "Trouver tous les sanctuaires dans Zelda: Breath of the Wild"
    user: [3], // PixelMaster
  },
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [3], // Challenge ID pour "Terminer Super Mario Bros. sans utiliser de warp zones"
<<<<<<< HEAD
    user: [5], // GameLord23
=======
    user: [5, 7], // GameLord23 et NinjaXtreme
>>>>>>> liaison-api-externe
  },
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [4], // Challenge ID pour "Finir Halo: Combat Evolved en Légendaire"
    user: [6], // ProGamer007
  },
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [5], // Challenge ID pour "Battre l'arme émeraude dans Final Fantasy VII"
    user: [8], // BattleKing
  },
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [6], // Challenge ID pour "Terminer The Witcher 3 sans utiliser de potions"
<<<<<<< HEAD
    user: [2], // ShadowX
=======
    user: [2, 6], // ShadowX et ProGamer007
>>>>>>> liaison-api-externe
  },
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [7], // Challenge ID pour "Obtenir tous les succès dans Tetris"
    user: [9], // MasterChief77
  },
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [8], // Challenge ID pour "Construire une base sous-marine dans Minecraft"
<<<<<<< HEAD
    user: [7], // NinjaXtreme
=======
    user: [7, 10], // NinjaXtreme et EliteGamer
>>>>>>> liaison-api-externe
  },
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [9], // Challenge ID pour "Voler un avion de chasse et échapper à 5 étoiles dans GTA V"
    user: [8], // BattleKing
  },
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [10], // Challenge ID pour "Chasser un animal légendaire dans Red Dead Redemption 2"
    user: [5], // GameLord23
  },
<<<<<<< HEAD
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [10], // Challenge ID pour "Chasser un animal légendaire dans Red Dead Redemption 2"
    user: [7], // GameLord23
  },
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    status: true,
    challenge: [10], // Challenge ID pour "Chasser un animal légendaire dans Red Dead Redemption 2"
    user: [6], // GameLord23
  },
=======
>>>>>>> liaison-api-externe
];

const challengeLikes = [
  { user_id: 1, challenge_id: 2 },
  { user_id: 2, challenge_id: 1 },
  { user_id: 3, challenge_id: 3 },
  { user_id: 4, challenge_id: 4 },
  { user_id: 5, challenge_id: 1 },
  { user_id: 6, challenge_id: 2 },
  { user_id: 7, challenge_id: 6 },
  { user_id: 8, challenge_id: 9 },
  { user_id: 9, challenge_id: 5 },
  { user_id: 10, challenge_id: 7 },
];

const realizationLikes = [
  { user_id: 1, realization_id: 2 },
  { user_id: 2, realization_id: 1 },
  { user_id: 3, realization_id: 3 },
  { user_id: 4, realization_id: 4 },
  { user_id: 5, realization_id: 1 },
  { user_id: 6, realization_id: 2 },
  { user_id: 7, realization_id: 6 },
  { user_id: 8, realization_id: 9 },
  { user_id: 9, realization_id: 5 },
  { user_id: 10, realization_id: 7 },
];

for (const category of categories) {
  const newCategory = await Category.create({
    id: category.id,
    title: category.title,
    description: category.description,
    color: category.color,
  });
}

for (const user of users) {
  const newUser = await User.create({
    id: user.id,
    name: user.name,
    password: user.password,
    email: user.email,
    role: user.role,
  });
}

for (const platform of platforms) {
  const newPlatform = await Platform.create({
    id: platform.id,
    name: platform.name,
  });
}

for (const game of games) {
  try {
    const newGame = await Game.create({
      id: game.id,
      title: game.title,
      description: game.description,
      release: game.release,
      kind: game.kind,
    });

    for (const platformId of game.platforms) {
      const platform = await Platform.findByPk(platformId);
      await newGame.addPlatform(platform);
    }
  } catch (e) {
    console.log("error with game:", game.name);
    console.error(e);
  }
}

for (const challenge of challenges) {
  try {
    const newChallenge = await Challenge.create({
      id: challenge.id,
      title: challenge.title,
      description: challenge.description,
      difficulty: challenge.difficulty,
    });

    for (const gameId of challenge.game) {
      const game = await Game.findByPk(gameId);
      await newChallenge.setGame(game);
    }

    for (const categoryId of challenge.category) {
      const category = await Category.findByPk(categoryId);
      await newChallenge.setCategory(category);
    }

    for (const userId of challenge.user) {
      const user = await User.findByPk(userId);
      await newChallenge.setUser(user);
    }
  } catch (e) {
    console.log("error with challenge:", challenge.name);
    console.error(e);
  }
}

for (const realization of realizations) {
  try {
    const newRealization = await Realization.create({
      id: realization.id,
      link: realization.link,
      status: realization.status,
    });

    for (const challengeId of realization.challenge) {
      const challenge = await Challenge.findByPk(challengeId);
      await newRealization.setChallenge(challenge);
    }
    for (const userId of realization.user) {
      const user = await User.findByPk(userId);
      await newRealization.setUser(user);
    }
  } catch (e) {
    console.log("error with realization:", realization.name);
    console.error(e);
  }
}

for (const likeChallenge of challengeLikes) {
  const newUserLikeChallenge = await UserLikeChallenge.create({
    user_id: likeChallenge.user_id,
    challenge_id: likeChallenge.challenge_id,
  });
}

for (const likerealization of realizationLikes) {
  const newUserLikerealization = await UserLikeRealization.create({
    user_id: likerealization.user_id,
    realization_id: likerealization.realization_id,
  });
}

await sequelize.close();
