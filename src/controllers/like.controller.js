import { UserLikeChallenge } from '../models/userlikechallenge.model.js';
import { UserLikeRealization } from '../models/userlikerealization.model.js';
import jwt from 'jsonwebtoken';

export const Userlike = {
  async challenge(req, res) {
    const token = req.cookies.token;
    const challengeId = req.params.id;
    if (!token) {
      return res.status(401).json({ message: 'Vous devez être connecté' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decoded;
    const [_, created] = await UserLikeChallenge.findOrCreate({
      where: { user_id: id, challenge_id: challengeId },
    });

    if (!created) {
      return res.status(400).json({ message: 'Déjà liké !' });
    }
    res.status(201).json({ message: 'Challenge liké !' });
  },

  async realization(req, res) {
    const token = req.cookies.token;
    const challengeId = req.params.id;
    if (!token) {
      return res.status(401).json({ message: 'Vous devez être connecté' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decoded;
    const [_, created] = await UserLikeRealization.findOrCreate({
      where: { user_id: id, challenge_id: challengeId },
    });

    if (!created) {
      return res.status(400).json({ message: 'Déjà liké !' });
    }
    res.status(201).json({ message: 'Challenge liké !' });
  },
};
