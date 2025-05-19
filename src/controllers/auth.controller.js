import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import { User } from "../models/user.model.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const authController = {
  async signup(req, res) {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Email invalide" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        email,
        password: hashedPassword,
        name,
        role: "user",
      });

      res.status(201).json({ message: "Compte créé", userId: newUser.id });
    } catch (err) {
      res.status(500).json({ error: "Erreur lors de la création du compte" });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email et mot de passe requis" });
    }

    try {
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(401).json({ error: "Email non trouvé" });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: "Mot de passe incorrect" });

      const token = jwt.sign({ id: user.id, name: user.name, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "2h" });
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 2 * 60 * 60 * 1000,
      });

      res.status(200).json({ message: "Connexion réussie", pseudo: user.name, id: user.id });
    } catch (err) {
      res.status(500).json({ error: "Erreur lors de la connexion" });
    }
  },
  async me(req, res) {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Non authentifié" });
    }

    try {
      const payload = jwt.verify(token, JWT_SECRET);
      res.json({ id: payload.id, pseudo: payload.name, role: payload.role });
    } catch (err) {
      res.status(401).json({ error: "Token invalide ou expiré" });
    }
  },

  async logout(req, res) {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true, 
      sameSite: "strict",
    });
    res.status(200).json({ message: "Déconnecté" });
  },
};
