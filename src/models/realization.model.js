import { Model, Datatypes } from 'sequelize';
import { sequelize } from './client.js';

export class Realization extends Model {}

Realization.init({
  link: {
    type: Datatypes.STRING,
    allownull: false,
  },
  status: {
    type: Datatypes.BOOLEAN,
    allowNull: false
  }
}, {
    sequelize,
    tableName: 'realization'

});
