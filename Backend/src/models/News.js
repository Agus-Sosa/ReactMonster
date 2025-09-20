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
        type:DataTypes.JSON,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    imageUrl:{
        type: DataTypes.STRING,
        defaultValue:'https://img.freepik.com/foto-gratis/rodaje-fantastic-alien_23-2151648335.jpg?semt=ais_incoming&w=740&q=80'
    }
})