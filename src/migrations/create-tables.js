import { sequelize } from "../models/client.js";
import { Game, Platform, Challenge, User, Realization, Category } from '../models/associations.js';


await sequelize.sync({ force: true });

console.log('Synchronisation terminée');

await sequelize.close();