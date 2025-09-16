import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { config } from "../config/config.js";


export const Post = sequelize.define(config.modelData.post,{
    id_post: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type:DataTypes.STRING,
        allowNull:false
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: config.modelData.user
    },
    
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    content: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    total_like: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    state_post: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    admin_decide: {
        type: DataTypes.INTEGER,
        references: config.modelData.user,
    }
    

    
})