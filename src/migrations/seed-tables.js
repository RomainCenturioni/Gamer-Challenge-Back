import {  Game, Platform, Challenge,  User, Realization, Category, } from '../models/associations.js';
import { sequelize } from '../models/client.js';

await Game.bulkCreate([
  {
    title: 'Diablo IV',
    description: "Diablo IV est un jeu vidéo d'action-RPG de type hack 'n' slash développé par Blizzard Entertainment. Il constitue le quatrième épisode principal de la série Diablo, faisant suite à Diablo III sorti en 2012",
    release: '2023',
    kind: 'RPG',
  },
  {
    title: 'Rocket League',
    description: 'Rocket League est un jeu vidéo développé et édité par Psyonix. Il sort en juillet 2015 sur Windows et sur PlayStation 4, en février 2016 sur Xbox One, en septembre 2016 sur Linux et Mac, en novembre 2017 sur Nintendo Switch et en octobre 2021 sur PlayStation 5.',
    release: '2015',
    kind: 'Course, Football',
  },
  {
    title: 'Alex Kidd',
    description: 'Alex Kidd est une série de jeux vidéo créée par Sega en 1986 avec le jeu Alex Kidd in Miracle World. Elle met en scène le personnage Alex Kidd, qui sera la mascotte de Sega avant Sonic.',
    release: '1986',
    kind: 'Plateforme',
  },
]);

await Platform.bulkCreate([
  { name: 'PlayStation' },
  { name: 'Xbox' },
  { name: 'PC' },
  { name: 'Nintendo Switch' },
  { name: 'Sega Mégadrive' },
]);

await Challenge.bulkCreate([
  {
    title: 'Permadeath sur Rocket League',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    difficulty: 'Hard',
    // GameId: 2,
    // CategoryId: 3,
    // UserId: 1
  },
  {
    title: 'No Hit sur Alex Kidd',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    difficulty: 'Normal',
    // GameId: 3,
    // CategoryId: 2,
    // UserId: 2
  },
  {
    title: 'Speedrun sur Diablo IV',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    difficulty: 'Easy',
    // GameId: 1,
    // CategoryId: 3,
    // UserId: 3
  }
]);

await Category.bulkCreate([
  {
    title: 'Permadeath',
    description: 'Une seule vie. Si tu meurs, tu recommences tout.',
    color:'FC620C'
  },  {
    title: 'No hit',
    description: 'Terminer le jeu,  un niveau ou un boss sans prendre de dégâts.',
    color:'04BE5E'
  },  {
    title: 'Speedrun',
    description: 'Finir le jeu le plus vite possible (Any%, 100%, Glitchless...)',
    color:'01BFFC'
  },
])

await User.bulkCreate([
  {
    name: 'Killer75',
    password: 'lolilol75',
    email:'killer75@progamer.fr',
    role:'User'
  },
  {
    name: 'Gigachad69',
    password: 'lemeilleur69',
    email:'Gigachad69@progamer.fr',
    role:'User'
  },
  {
    name: 'Macron75',
    password: 'président00',
    email:'Macron75@progamer.fr',
    role:'User'
  },
  {
    name: 'Adminous',
    password: 'Admin55',
    email:'Admin@progamer.fr',
    role:'Admin'
  },
])

await Realization.bulkCreate([
  {
    link: 'https://www.youtube.com/watch?v=Ohv8u9uodeU',
  },
  {
    link: 'https://www.youtube.com/watch?v=SJvx6G4dg3M',
  },
  {
    link: 'https://www.youtube.com/watch?v=u79AEvrsS8g',
  }
])

await sequelize.close();
