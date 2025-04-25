import { Model, Datatypes } from "sequelize";
import { sequelize } from './client.js';

export class Challenge extends Model {};

Challenge.init({
    title: {
        type: Datatypes.STRING(40),
        allowNull: false
    },
    description: {
        type: Datatypes.STRING,
        allowNull: false
    },
    difficuly:{
        type: Datatypes.STRING(20),
        allowNull: false
    },
    status:{
        types: Datatypes.BOOLEAN,
        allowNull: false
    },    
}, {
    sequelize,
    tableName: 'challenge'

});