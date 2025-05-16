import { Category, Challenge, Game } from "../models/associations.js";

export const categoryController = {
  async getAll(_, res) {
    const categories = await Category.findAll({
      include: [
        {
          model: Challenge,
          as: "challenge",
          include: [
            {
              model: Game,
              as: "game",
            },
          ],
          limit: 3,
          order: [["createdAt", "DESC"]],
        },
      ],
    });
    res.json(categories);
  },

  async getOne(req, res) {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    res.json(category);
  },
};
