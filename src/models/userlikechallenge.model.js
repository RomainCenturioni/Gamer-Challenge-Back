import { Model, DataTypes } from 'sequelize';
import { sequelize } from './client.js';

export class UserLikeChallenge extends Model {};

UserLikeChallenge.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'User',
            key: 'id'
        },
        onDelete:"CASCADE"

    },
    challenge_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Challenge',
            key: 'id'
        },
        onDelete:"CASCADE"
    }
}, {
    sequelize,
    tableName: 'UserLikeChallenge'
})