import { Challenge } from '../models/associations.js';

export const challengeController = {
  async getAll(_, res) {
    const challenges = await Challenge.findAll();
    res.json(challenges);
  },
  async getOne(req, res) {
    const { id } = req.params;
    const challenge = await Challenge.findByPk(id);
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
    const ThreeMostPopularChallenges = await Challenge.findAll({
      include: ['game', 'category', 'user', 'popularity'],
      limit: 3,
      order: [['title', 'DESC']],
    });
    res.json(ThreeMostPopularChallenges);
  }
};
