import { Model, DataTypes } from "sequelize";
import { sequelize } from './client.js';

export class Category extends Model{};

Category.init({
    title: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'category'

});