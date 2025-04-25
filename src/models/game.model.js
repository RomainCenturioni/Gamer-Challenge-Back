import { Model, DataTypes } from "sequelize";
import { sequelize } from './client.js';

export class Game extends Model{};

Game.init({
    title: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    kind : {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'game'

});