import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { config } from "../config/config.js";


export const Comments = sequelize.define(config.modelData.comments,{ 
    id_comment: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    id_post: {
        type: DataTypes.INTEGER,
        references: config.modelData.post,
    },
    id_user: {
        type:DataTypes.INTEGER,
        references:config.modelData.user
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    content: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    coment_state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    admin_decide: {
        type: DataTypes.INTEGER,
        references:config.modelData.user,
    }
})