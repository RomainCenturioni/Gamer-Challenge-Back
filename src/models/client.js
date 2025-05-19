import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(PG_URL, {
  dialect: "postgres",
  
});
export default sequelize;