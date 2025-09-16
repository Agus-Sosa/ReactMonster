// import { Sequelize } from "sequelize";

// // En este archivo estamos instanciando nuestra base de datos
// export const sequelize = new Sequelize({
//     dialect: "sqlite",
//     storage: "./react_monster.db"
// });

import { DatabaseFactory } from "./dbFactory.js";
import { config } from "./config.js";


const sequelize = DatabaseFactory.createConnection(config);

export {sequelize};

