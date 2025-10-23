import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { config } from '../config/config.js';

export const Comments = sequelize.define(config.modelData.comments, {
  id_comment: {
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
