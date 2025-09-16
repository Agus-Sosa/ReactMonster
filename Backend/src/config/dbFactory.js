import { Sequelize } from "sequelize";


class DatabaseFactory {
    static createConnection(config) {

        try {
            let sequelize;

            switch (config.db_dialect) {
            case "sqlite":
            sequelize = new Sequelize({
                dialect:"sqlite",
                storage: "./react_monster.db"
            })
            break;

        default:
            throw new Error(`El dialect que se proporcionado no es reconocible`)
        }

        return sequelize;
        } catch (error) {
            console.log("Error al conectar con la base de datos", error.message);
            throw error;
        }
    
    }
}


export {DatabaseFactory};