import { Game } from "../models/associations.js";

export const gameController = {
  async getAll(_, res) {
    const games = await Game.findAll({
      include: "platform",
    });
    res.json(games);
  },

  async getOne(req, res) {
    const { id } = req.params;
    const game = await Game.findByPk(id, {
      include: "platform",
    });
    res.json(game);
  },
  async create(req, res) {
    const inputData = req.body;
    const game = await Game.create(inputData);
    res.status(201).json(game);
  },
  async delete(_, res) {
    const { id } = req.params;
    const game = await Game.findByPk(id);
    await game.destroy();
    res.status(204).json();
  },
};
