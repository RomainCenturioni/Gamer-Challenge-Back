import { Challenge, Game, Category, User, Realization } from "../models/associations.js";
import { sequelize } from "../models/client.js"; //
import jwt from "jsonwebtoken";
import { UserLikeChallenge } from "../models/userlikechallenge.model.js";
export const challengeController = {
  async getAll(_, res) {
    try {
      const challenges = await Challenge.findAll({
        include: [
          { model: Game, as: "game" },
          { model: Category, as: "category" },
          {
            model: Realization,
            as: "realization",
            include: [{ model: User, as: "user", attributes: ["id", "name"] }],
          },
          {
            association: "creator",
            attributes: ["id", "name"],
          },
        ],
        order: [["createdAt", "DESC"]],
      });

      res.json(challenges);
    } catch (error) {
      console.error("Erreur getAll challenges:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },
  async getOne(req, res) {
    const { id } = req.params;
    const token = req.cookies.token; // Récupérer le token de l'utilisateur

    try {
      // Récupérer le challenge avec le nombre de likes
      const challenge = await Challenge.findByPk(id, {
        include: [
          { model: Game, as: "game" },
          { model: Category, as: "category" },
          { model: User, as: "creator", attributes: ["id", "name"] },
          {
            model: Realization,
            as: "realization",
            include: [{ model: User, as: "user", attributes: ["id", "name"] }],
          },
        ],
        attributes: {
          include: [
            [
              sequelize.literal(`(
                SELECT COUNT(*) 
                FROM "UserLikeChallenge" 
                WHERE "UserLikeChallenge"."challenge_id" = "Challenge"."id"
              )`),
              "likeCount",
            ],
          ],
        },
      });

      if (!challenge) {
        return res.status(404).json({ message: "Challenge non trouvé" });
      }

      let isLiked = false;

      if (token) {
        // Si l'utilisateur est connecté, on vérifie s'il a liké ce challenge
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id: userId } = decoded;

        const existingLike = await UserLikeChallenge.findOne({
          where: { user_id: userId, challenge_id: id },
        });

        isLiked = !!existingLike;
      }

      return res.json({
        ...challenge.toJSON(),
        likeCount: Number(challenge.get("likeCount")),
        isLiked,
      });
    } catch (error) {
      console.error("Erreur lors de la récupération du challenge :", error);
      return res.status(500).json({ message: "Erreur serveur" });
    }
  },
  async create(req, res) {
    const inputData = req.body;
  
    try {
      const challenge = await Challenge.create(inputData);
  
      // Rechargement avec les relations associées
      const fullChallenge = await Challenge.findByPk(challenge.id, {
        include: [
          { model: User, as: "creator", attributes: ["id", "name"] },
          { model: Game, as: "game", attributes: ["id", "title"] },
          { model: Category, as: "category", attributes: ["id", "title"] },
        ],
      });
  
      res.status(201).json(fullChallenge);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la création du challenge" });
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const inputData = req.body;
    const challenge = await Challenge.findByPk(id);
    await challenge.update(inputData);
    res.json(challenge);
  },
  async delete(_, res) {
    const { id } = req.params;
    const challenge = await Challenge.findByPk(id);
    await challenge.destroy();
    res.status(204).json();
  },
  async getHomepageMostPopular(_, res) {
    try {
      const ThreeMostPopularChallenges = await Challenge.findAll({
        include: ["game", "category", { association: "creator", attributes: ["id", "name"] }],

        attributes: {
          include: [
            [
              sequelize.literal(`(
                SELECT COUNT(*) 
                FROM "UserLikeChallenge" 
                WHERE "UserLikeChallenge"."challenge_id" = "Challenge"."id"
              )`),
              "likeCount",
            ],
          ],
        },
        order: [[sequelize.literal(`"likeCount"`), "DESC"]],
        limit: 3,
      });

      res.json(ThreeMostPopularChallenges);
    } catch (error) {
      console.error("Erreur récupération challenges populaires :", error);
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  },
};
