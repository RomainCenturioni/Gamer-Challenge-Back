import { Model, Datatypes } from "sequelize";
import { sequelize } from './client.js';

export class Category extends Model{};

Category.init({
    title: {
        type: Datatypes.STRING(40),
        allowNull: false
    },
    description: {
        type: Datatypes.STRING,
        allowNull: false
    },
    color: {
        type: Datatypes.STRING(20),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'category'

});