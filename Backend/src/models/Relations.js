import { User } from "./User.js";
import { Post } from "./Post.js";
import { Like } from "./Like.js";
import { Comments } from "./Comments.js";

// Usuarios - Posts
User.hasMany(Post, { foreignKey: "id_user" });
Post.belongsTo(User, { foreignKey: "id_user" });

// Posts - Likes
Post.hasMany(Like, { foreignKey: "id_post" });
Like.belongsTo(Post, { foreignKey: "id_post" });

// Users - Likes (quien da like)
User.hasMany(Like, { foreignKey: "id_user" });
Like.belongsTo(User, { foreignKey: "id_user" });

// Posts - Comments
Post.hasMany(Comments, { foreignKey: "id_post" });
Comments.belongsTo(Post, { foreignKey: "id_post" });

// Users - Comments
User.hasMany(Comments, { foreignKey: "id_user" });
Comments.belongsTo(User, { foreignKey: "id_user" });


export { User, Post, Like, Comments };
