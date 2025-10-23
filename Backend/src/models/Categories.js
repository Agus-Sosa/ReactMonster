import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { config } from "../config/config.js";


export const Categories = sequelize.define(config.modelData.categories, {
    id_category: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    resume:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    imageUrl:{
        /*Despues modificar esto por los logos correspondientes(?) */
        type: DataTypes.STRING,
        defaultValue:'https://img.freepik.com/foto-gratis/rodaje-fantastic-alien_23-2151648335.jpg?semt=ais_incoming&w=740&q=80'
    }
})