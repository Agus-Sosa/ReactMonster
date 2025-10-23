import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { config } from '../config/config.js';

export const Like = sequelize.define(config.modelData.like, {
  id_like: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
     references: { model: 'Users', key: 'id_user' }
    
  },
  id_post: {
    type: DataTypes.INTEGER,
    allowNull: false,
     references: { model: 'Posts', key: 'id_post' }

  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
});
