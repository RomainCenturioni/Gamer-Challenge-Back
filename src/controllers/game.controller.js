import {
  Category,
  Challenge,
  Game,
  Platform,
  Realization,
} from '../models/associations.js';
import axios from 'axios';
import sequelize from '../models/client.js';

export const gameController = {
  async getAll(_, res) {
    const games = await Game.findAll({
      include: 'platform',
      order: [['createdAt', 'DESC']],
    });
    res.json(games);
  },

  async getOne(req, res) {
    try {
      const { id } = req.params;
  
      const game = await Game.findByPk(id, {
        include: [
          { model: Platform, as: 'platform' },
          {
            model: Challenge,
            required: false,
            separate: true,
            limit: 1,
            order: [
              [
                sequelize.literal(`(
                  SELECT COUNT(*) 
                  FROM "UserLikeChallenge" 
                  WHERE "UserLikeChallenge"."challenge_id" = "Challenge"."id"
                )`),
                'DESC'
              ]
            ],
            include: [
              {
                model: Realization,
                as: 'realization',
                order: [['createdAt', 'DESC']],
              },
              {
                model: Category,
                as: 'category',
              },
            ],
          },
        ],
      });
  
      if (!game) return res.status(404).json({ error: "Jeu non trouvé" });
  
      const mostLikedChallenge = game.Challenges?.[0] ?? null;
  
      const latestRealization = await Realization.findOne({
        include: [
          {
            model: Challenge,
            as: 'challenge',
            where: { gameId: id },
            include: [{ model: Category, as: 'category' }],
          },
        ],
        order: [['createdAt', 'DESC']],
      });
  
      res.json({
        ...game.toJSON(), 
        mostLikedChallenge,
        latestRealization,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
  ,
  


  async create(req, res) {
    const inputData = req.body;
    const game = await Game.create(inputData);
    res.status(201).json(game);
  },

  async delete(req, res) {
    const { id } = req.params;
    const game = await Game.findByPk(id);
    await game.destroy();
    res.status(204).json();
  },

  async search(req, res) {
    const { queryGame } = req.query;
    if (!queryGame) return res.status(400).json({ error: 'Requête vide' });

    try {
      const response = await axios.get('https://api.rawg.io/api/games', {
        params: {
          key: process.env.RAWG_API_KEY,
          search: queryGame,
          ordering: '-rating',
          page_size: 15,
        },
      });

      res.json(response.data);
    } catch (err) {
      console.error('Erreur RAWG :', err.message);
      res.status(500).json({ error: 'Erreur RAWG' });
    }
  },
  async import(req, res) {
    const { id } = req.params;

    try {
      // Requête vers l'API RAWG pour obtenir les détails du jeu
      const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
        params: { key: process.env.RAWG_API_KEY },
      });

      // Récupérer les informations du jeu à partir de la réponse
      const game = response.data;
      const newGame = {
        id: game.id,
        title: game.name,
        description: game.description_raw,
        release: game.released,
        image: game.background_image,
        kind: game.genres?.[0].name || 'Inconnu',
      };

      // Vérifier si le jeu existe déjà dans la base de données
      const [gameInstance, created] = await Game.findOrCreate({
        where: { id: newGame.id },
        defaults: newGame,
      });

      // Si le jeu existe déjà dans la base de données, répondre avec un statut 409
      if (!created) {
        console.log('Déjà importé !');
        return res.status(409).json({ message: 'Déjà importé !' });
      }
      // Récupération des platforms en du jeu
      const platforms = game.platforms || [];
      for (const platform of platforms) {
        const newPlatform = {
          id: platform.platform.id,
          name: platform.platform.name,
        };
        console.log(
          'Platform ID:',
          newPlatform.id,
          'Platform Name:',
          newPlatform.name,
        );

        // Pour chaque platforms on essai de la créer si elel n'existe pas
        const [platformInstance] = await Platform.findOrCreate({
          where: { id: newPlatform.id },
          defaults: newPlatform,
        });
        // On ajoute l'association entre la platform et le jeu
        await gameInstance.addPlatform(platformInstance);
      }
      // Si le jeu a été créé, envoyer une réponse avec le jeu créé
      res.status(201).json(gameInstance);
    } catch (err) {
      console.error('Erreur import RAWG :', err.message);

      // Vérifier si l'erreur est liée à Axios pour envoyer un message spécifique
      if (err.response) {
        return res.status(err.response.status).json({
          message: err.response.data.message || 'Erreur inconnue depuis RAWG',
        });
      }

      // Erreur générale (par exemple, problème de réseau)
      res.status(500).json({ error: 'Échec importation RAWG' });
    }
  },
};
