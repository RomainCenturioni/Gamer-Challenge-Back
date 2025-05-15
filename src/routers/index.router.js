import { Userlike } from "../controllers/like.controller.js";
import { Router } from "express";
import { gameController } from "../controllers/game.controller.js";
import { challengeController } from "../controllers/challenge.controler.js";
import { categoryController } from "../controllers/category.controller.js";
import { userController } from "../controllers/user.controller.js";
import { realizationController } from "../controllers/realization.controller.js";
import { authController } from "../controllers/auth.controller.js";

export const router = new Router();

router.route("/Games").get(gameController.getAll).post(gameController.create);

router.route("/Games/:id").get(gameController.getOne).delete(gameController.delete);

router.route("/Category").get(categoryController.getAll);

router.route("Category/:id").get(categoryController.getOne);

router.route("/Challenges").get(challengeController.getAll).post(challengeController.create);

router.route("/Challenges/:id").get(challengeController.getOne).patch(challengeController.update).delete(challengeController.delete);

router.route("/Challenges/:id/Like").post(Userlike.challenge);

router.route("/User").get(userController.getAll);

router.route("/User/:id").get(userController.getOne);

router.route("/Realizations").post(realizationController.create);

router.route("/Realizations/:id").delete(realizationController.delete).get(realizationController.getOne);

router.route("/Realizations/:id/Like").post(Userlike.realization);

router.route("/LastRealizations").get(realizationController.getHomepageLastRealization);

router.route("/PopularChallenges").get(challengeController.getHomepageMostPopular);

router.route("/auth/signup").post(authController.signup);

router.route("/auth/login").post(authController.login);

router.route("/auth/me").get(authController.me);

router.route("/auth/logout").post(authController.logout);
