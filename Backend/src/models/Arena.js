import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { config } from '../config/config.js';


export const Arena = sequelize.define(config.modelData.arena, {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  arena_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  arena_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  arena_image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});