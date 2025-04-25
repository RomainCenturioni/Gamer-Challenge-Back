import { Model, DataTypes } from "sequelize";
import { sequelize } from './client.js';

export class Challenge extends Model {};

Challenge.init({
    title: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    difficuly:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },    
}, {
    sequelize,
    tableName: 'challenge'

});