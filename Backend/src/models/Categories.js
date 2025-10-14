import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Categories = sequelize.define("Categories", {
  id_category: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  resume: { type: DataTypes.STRING, allowNull: true },
  imageUrl: { type: DataTypes.STRING, allowNull: true },
});

export default Categories;
