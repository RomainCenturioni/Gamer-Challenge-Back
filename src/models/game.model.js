import { Model, DataTypes } from "sequelize";
import { sequelize } from './client.js';

export class Game extends Model{};

Game.init({
    title: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    release: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kind : {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'game'

});