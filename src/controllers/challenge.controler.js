import { Challenge } from "../models/associations.js";
import { sequelize } from "../models/client.js"; // <-- importe bien l'instance Sequelize
export const challengeController = {
  async getAll(_, res) {
    const challenges = await Challenge.findAll({
      include: ["game", "category"],
    });
    res.json(challenges);
  },
  async getOne(req, res) {
    const { id } = req.params;
    const challenge = await Challenge.findByPk(id, {
      include: ["game", "category", "user"],
    });
    res.json(challenge);
  },
  async create(req, res) {
    const inputData = req.body;
    const challenge = await Challenge.create(inputData);
    res.status(201).json(challenge);
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
        include: ["game", "category", "user"], // Suffisant si les relations sont bien définies
        attributes: {
          include: [
            [
              sequelize.literal(`(
                SELECT COUNT(*) 
                FROM "UserLikeChallenge" 
                WHERE "UserLikeChallenge"."ChallengeId" = "Challenge"."id"
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
