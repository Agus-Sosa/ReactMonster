import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { config } from "../config/config.js";


export const Post = sequelize.define(config.modelData.post, {
  id_post: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  resume: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'Users', key: 'id_user' }
  },
  id_category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'Categories', key: 'id_category' }
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgContent: {
    type: DataTypes.STRING,
    defaultValue: "https://i.pinimg.com/736x/d2/d5/f8/d2d5f8e7fa9a7fe44c1dee164e8de01e.jpg",
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
    references: { model: 'Users', key: 'id_user' },
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "https://png.pngtree.com/png-vector/20250327/ourmid/pngtree-a-rolled-up-parchment-scroll-with-wax-seal-png-image_15886793.png"
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});
