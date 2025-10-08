import { User } from "./User.js";
import { Comments } from "./Comments.js";
// Pray, Malena, pray, google this to make the joins, it makes sense, wish me luck.
Comments.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Comments, { foreignKey: "id_user" });
export { User, Comments };