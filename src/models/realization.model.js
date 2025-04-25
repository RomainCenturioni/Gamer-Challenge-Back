import { Model, DataTypes } from 'sequelize';
import { sequelize } from './client.js';

export class Realization extends Model {}

Realization.init({
  link: {
    type: DataTypes.STRING,
    allownull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
    sequelize,
    tableName: 'realization'

});
