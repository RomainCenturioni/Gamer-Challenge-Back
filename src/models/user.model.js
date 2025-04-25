import { Model, DataTypes } from "sequelize";
import { sequelize } from './client.js';

export class User extends Model{};

User.init({
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
        sequelize,
        tableName: 'user'
    
});