import { Model, Datatypes } from "sequelize";
import { sequelize } from './client.js';

export class Game extends Model{};

Game.init({
    title: {
        type: Datatypes.STRING(40),
        allowNull: false
    },
    description: {
        type: Datatypes.STRING,
        allowNull: false
    },
    release: {
        type: Datatypes.DATEONLY,
        allowNull: false
    },
    kind : {
        type: Datatypes.STRING(20),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'game'

});