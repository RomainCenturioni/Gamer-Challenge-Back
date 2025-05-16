import { Model, DataTypes } from 'sequelize';
import { sequelize } from './client.js';

export class UserLikeRealization extends Model {};

UserLikeRealization.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'User',
            key: 'id'
        },
        onDelete:"CASCADE"

    },
    realization_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Realization',
            key: 'id'
        },
        onDelete:"CASCADE"
    }
}, {
    sequelize,
    tableName: 'UserLikeRealization'
})