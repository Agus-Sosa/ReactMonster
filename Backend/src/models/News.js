import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { config } from "../config/config.js";


export const News = sequelize.define(config.modelData.news, {
    id_news: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    id_admin: {
        type:DataTypes.INTEGER,
        references:config.modelData.user,
    },
    content: {
        type:DataTypes.JSON,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
})