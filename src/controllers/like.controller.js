import { UserLikeChallenge, UserLikeRealization} from '../models/associations.js';

export const like = {

  async challenge(req, res) {
    const userId = req.user.id;
    const challengeId = req.params.id;

    const [_, created] = await UserLikeChallenge.findOrCreate({
      where: { user_id: userId, challenge_id: challengeId },
    });

    if (!created) {
      return res.status(400).json({ message: 'Déjà liké !' });
    }
    res.status(201).json({ message: 'Challenge liké !' });
  },

  async realization(req, res) {
    const userId = req.user.id;
    const challengeId = req.params.id;

    const [_, created] = await UserLikeRealization.findOrCreate({
      where: { user_id: userId, challenge_id: challengeId },
    });

    if (!created) {
      return res.status(400).json({ message: 'Déjà liké !' });
    }
    res.status(201).json({ message: 'Challenge liké !' });
  },
};
