import { Game } from "./game.model.js";
import { Challenge } from "./challenge.model.js";
import { Realization } from "./realization.model.js";
import { Category } from "./category.model.js";
import { User } from "./user.model.js";
import { Platform } from "./platform.model.js";
import { UserLikeChallenge } from "./userlikechallenge.model.js";
import { UserLikeRealization } from "./userlikerealization.model.js";

Game.hasMany(Challenge, {
  onDelete: "CASCADE",
  foreignKey: "challengeId",
});
Challenge.belongsTo(Game, {
  as:"game",
  foreignKey: "gameId",
});

Game.belongsToMany(Platform, {
  as: "platform",
  foreignKey: "gameId",
  through: "GamePlatform",
});
Platform.belongsToMany(Game, {
  as: "game",
  through: "GamePlatform",
  foreignKey: "platformId"
});

Category.hasMany(Challenge, {
  onDelete: "CASCADE",
  as: "challenge",
  foreignKey: "categoryId",
});
Challenge.belongsTo(Category, {
  as: "category",
  foreignKey: "categoryId",
});

Challenge.hasMany(Realization, {
  onDelete: "CASCADE",
  as: "realization",
  foreignKey: "challengeId",
});
Realization.belongsTo(Challenge, {
  as: "challenge",
  foreignKey: "challengeId",
});

User.hasMany(Challenge, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});
Challenge.belongsTo(User, {
  as: "creator",
  foreignKey: "userId",
});

User.belongsToMany(Challenge, {
  through: UserLikeChallenge,
  foreignKey: "user_id",
  otherKey: "challenge_id",
  as: "likeChallenge",
});
Challenge.belongsToMany(User, {
  through: UserLikeChallenge,
  foreignKey: "challenge_id",
  otherKey: "user_id",
  as: "likedChallenge",
});

User.hasMany(Realization, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});
Realization.belongsTo(User, {
  as: "user",
  foreignKey: "userId",
});

User.belongsToMany(Realization, {
  through: UserLikeRealization,
  foreignKey: "user_id",
  otherKey: "realization_id",
  as: "likeRealization",
});
Realization.belongsToMany(User, {
  through: UserLikeRealization,
  foreignKey: "realization_id",
  otherKey: "user_id",
  as: "likedRealization",
});

export { Game, Platform, Challenge, User, Realization, Category };
