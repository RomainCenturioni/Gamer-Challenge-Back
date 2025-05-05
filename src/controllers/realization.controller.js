import { Realization } from "../models/associations.js";

export const realizationController = {
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
          include: ["game"],
        },
        "user",
      ],
      limit: 3,
      order: [["createdAt", "DESC"]],
    });
    res.json(threeLastRealization);
  },
};
