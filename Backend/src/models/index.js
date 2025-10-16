import { User } from "./User.js";
import { Comments } from "./Comments.js";
import { News } from "./News.js";
import { Post } from "./Post.js";
// Pray, Malena, pray, google this to make the joins, it makes sense, wish me luck.
Comments.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Comments, { foreignKey: "id_user" });

Post.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Post, { foreignKey: "id_user" });

User.hasMany(News, {
  foreignKey: "id_admin",  
});
News.belongsTo(User, {
  foreignKey: "id_admin",
});



export { User, Comments,Post };