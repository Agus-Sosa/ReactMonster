import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { config } from "../config/config.js";

export const Like = sequelize.define(config.modelData.like, {
    id_like: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: config.modelData.user
    },
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: config.modelData.post
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});
