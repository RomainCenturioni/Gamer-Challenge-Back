<<<<<<< HEAD
import jwt from "jsonwebtoken";
import { UserLikeChallenge } from "../models/userlikechallenge.model.js";
import { UserLikeRealization } from "../models/userlikerealization.model.js";

=======

import jwt from 'jsonwebtoken';
import { UserLikeChallenge } from "../models/userlikechallenge.model.js";
import { UserLikeRealization } from "../models/userlikerealization.model.js";


>>>>>>> liaison-api-externe
export const Userlike = {
  async challenge(req, res) {
    const token = req.cookies.token;
    const challengeId = req.params.id;
<<<<<<< HEAD

    if (!token) {
      return res.status(401).json({ message: "Vous devez être connecté" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { id: userId } = decoded;

      const existingLike = await UserLikeChallenge.findOne({
        where: { user_id: userId, challenge_id: challengeId },
      });

      if (existingLike) {
        // Supprimer le like
        await existingLike.destroy();
      } else {
        // Ajouter le like
        await UserLikeChallenge.create({
          user_id: userId,
          challenge_id: challengeId,
        });
      }

      // Recalculer le nombre total de likes
      const likeCount = await UserLikeChallenge.count({
        where: { challenge_id: challengeId },
      });

      return res.status(200).json({
        likeCount,
        isLiked: !existingLike,
      });
    } catch (error) {
      console.error("Erreur lors du like/unlike :", error);
      return res.status(500).json({ message: "Erreur serveur" });
    }
  },
=======
    if (!token) {
      return res.status(401).json({ message: 'Vous devez être connecté' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decoded;
    const [_, created] = await UserLikeChallenge.findOrCreate({
      where: { user_id: id, challenge_id: challengeId },
    });

    if (!created) {
      return res.status(400).json({ message: "Déjà liké !" });
    }
    res.status(201).json({ message: "Challenge liké !" });
  },

>>>>>>> liaison-api-externe
  async realization(req, res) {
    const token = req.cookies.token;
    const challengeId = req.params.id;
    if (!token) {
<<<<<<< HEAD
      return res.status(401).json({ message: "Vous devez être connecté" });
=======
      return res.status(401).json({ message: 'Vous devez être connecté' });
>>>>>>> liaison-api-externe
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decoded;
    const [_, created] = await UserLikeRealization.findOrCreate({
      where: { user_id: id, challenge_id: challengeId },
    });

    if (!created) {
      return res.status(400).json({ message: "Déjà liké !" });
    }
    res.status(201).json({ message: "Challenge liké !" });
  },
};
