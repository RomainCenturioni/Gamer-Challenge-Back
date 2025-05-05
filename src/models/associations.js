import { Game } from "./game.model.js"
import { Challenge } from "./challenge.model.js"
import { Realization } from "./realization.model.js"
import { Category } from "./category.model.js"
import { User } from "./user.model.js"
import { Platform } from "./platform.model.js"

Game.hasMany(Challenge, {
    onDelete: 'CASCADE'
}); 
Challenge.belongsTo(Game, {
    as: 'game'
});

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
Challenge.belongsTo(Category, {
    as: 'category'
});

Challenge.hasMany(Realization, {
    onDelete:'CASCADE'
});
Realization.belongsTo(Challenge, {
    as: 'challenge'
});

User.hasMany(Challenge, {
    onDelete: 'CASCADE'
});
Challenge.belongsTo(User, {
    as: 'user'
});

User.belongsToMany(Challenge, {
    through: 'UserLikeChallenge',
    foreinKey: 'user_id',
    otherKey: 'challenge_id',
    as: 'like'
});
Challenge.belongsToMany(User, {
    through: 'UserLikeChallenge',
    foreinKey: 'challenge_id',
    otherKey: 'user_id',
    as: 'popularity'
}); 

User.hasMany(Realization, {
    onDelete: 'CASCADE'
});
Realization.belongsTo(User, {
    as: 'user'
});

User.belongsToMany(Realization, {
    through: 'UserRealization'
});
Realization.belongsToMany(User, {
    through: 'UserRealization'
});

export { Game, Platform, Challenge, User, Realization, Category };