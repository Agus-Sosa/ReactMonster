import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { config } from "../config/config.js";


export const News = sequelize.define(config.modelData.news, {
    id_news: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    id_admin: {
        type:DataTypes.INTEGER,
        references: { model: 'Users', key: 'id_user' }
        
    },
    title:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    resume:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type:DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    imageUrl:{
        type: DataTypes.STRING,
        defaultValue:'https://i.ibb.co/Myq6R75d/Imagen-de-Whats-App-2025-09-30-a-las-22-48-00-d3bb7321.jpg'
    }
})