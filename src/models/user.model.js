import { Model, Datatypes } from "sequelize";
import { sequelize } from './client.js';

export class User extends Model{};

User.init({
    name: {
        type: Datatypes.STRING(40),
        allowNull: false
    },
    password: {
        type: Datatypes.STRING,
        allowNull: false
    },
    email: {
        type: Datatypes.STRING,
        allowNull: false
    },
    role: {
        type: Datatypes.STRING(20),
        allowNull: false
    }
}, {
        sequelize,
        tableName: 'user'
    
});