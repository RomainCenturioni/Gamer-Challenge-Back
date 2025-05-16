import { Realization, Game, Category, User, Challenge } from "../models/associations.js";

export const realizationController = {
  async getOne(req, res) {
    const { id } = req.params;

    try {
      const realization = await Realization.findByPk(id, {
        include: [
          {
            model: User,
            as: "user",
            attributes: ["id", "name"],
          },
          {
            model: Challenge,
            as: "challenge",
            include: [
              {
                model: Game,
                as: "game",
              },
              {
                model: Category,
                as: "category",
              },
              {
                model: User,
                as: "creator",
                attributes: ["id", "name"],
              },
            ],
          },
        ],
      });

      if (!realization) {
        return res.status(404).json({ message: "Réalisation non trouvée" });
      }

      res.json(realization);
    } catch (error) {
      console.error("Erreur lors de la récupération de la réalisation :", error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  async create(req, res) {
    const inputData = req.body;
    const realization = await Realization.create(inputData);
    res.status(201).json(realization);
  },
  async delete(_, res) {
    const { id } = req.params;
    const realization = await Realization.findByPk(id);
    await realization.destroy();
    res.status(204).json();
  },
  async getHomepageLastRealization(_, res) {
    const threeLastRealization = await Realization.findAll({
      include: [
        {
          association: "challenge",
          include: ["game", "category", "creator"],
        },
        {
          association: "user",
          attributes: ["id", "name"],
        },
      ],
      limit: 3,
      order: [["createdAt", "DESC"]],
    });
    res.json(threeLastRealization);
  },
};
