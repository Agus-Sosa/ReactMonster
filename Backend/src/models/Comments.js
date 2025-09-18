import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Comments = sequelize.define('Comments', {
  id_comment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_post: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  edited: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  comment_state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
});
