import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { config } from '../config/config.js';

export const Reports = sequelize.define(config.modelData.reports, {
  id_report: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {model: config.modelData.user, key:"id_user"}
  },
  id_comment: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {model: config.modelData.post, key:"id_comment"}

  },
  resume: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },

  report_state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
});