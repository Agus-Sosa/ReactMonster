import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import Categories from "./Categories.js";

const Post = sequelize.define("Post", {
  id_post: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
  id_category: { type: DataTypes.INTEGER, allowNull: false },
});

Categories.hasMany(Post, { foreignKey: "id_category", onDelete: "CASCADE" });
Post.belongsTo(Categories, { foreignKey: "id_category", onDelete: "CASCADE" });

export default Post;
