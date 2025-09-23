import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { config } from '../config/config.js';



export const Monster = sequelize.define(config.modelData.monster, {
    monster_id: {
       type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
    },
    monster_role : {
        type: DataTypes.STRING,
        allowNull:false,

    },
    monster_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    monster_description: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    monster_image_url: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    monster_image_hero: {
        type:DataTypes.STRING,
        allowNull:false,
    }

})