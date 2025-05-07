import { sequelize } from "../models/client.js";
import "../models/associations.js";

await sequelize.sync({ force: true });

console.log("Synchronisation terminée");

await sequelize.close();
