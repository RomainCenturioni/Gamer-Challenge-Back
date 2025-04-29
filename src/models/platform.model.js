import { Model, DataTypes } from 'sequelize';
import { sequelize } from './client.js';

export class Platform extends Model{};

Platform.init({
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'platform'

});