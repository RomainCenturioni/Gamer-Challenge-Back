import { Game } from "./game.model.js"
import { Challenge } from "./challenge.model.js"
import { Realization } from "./realization.model.js"
import { Category } from "./category.model.js"
import { User } from "./user.model.js"
import { Platform } from "./platform.model.js"

Game.hasMany(Challenge, {
    onDelete: 'CASCADE'
}); 
Challenge.belongsTo(Game);

Game.belongsToMany(Platform, {
    as: 'platform',
    through: 'GamePlatform'
});
Platform.belongsToMany(Game, {
    through: 'GamePlatform'
});

Category.hasMany(Challenge, {
    onDelete:'CASCADE'
});
Challenge.belongsTo(Category);

Challenge.hasMany(Realization, {
    onDelete:'CASCADE'
});
Realization.belongsTo(Challenge);

User.hasMany(Challenge, {
    onDelete: 'CASCADE'
});
Challenge.belongsTo(User);

User.belongsToMany(Challenge, {
    through: 'UserLikeChallenge'
});
Challenge.belongsToMany(User, {
    through: 'UserLikeChallenge'
}); 

User.hasMany(Realization, {
    onDelete: 'CASCADE'
});
Realization.belongsTo(User);

User.belongsToMany(Realization, {
    through: 'UserRealization'
});
Realization.belongsToMany(User, {
    through: 'UserRealization'
});

export { Game, Platform, Challenge, User, Realization, Category };