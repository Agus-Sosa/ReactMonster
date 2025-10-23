import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { config } from "../config/config.js";

export const User = sequelize.define(config.modelData.user, {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
    },
    user_email: {
        type:DataTypes.STRING,
        unique:true,
        allowNull: false,
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_connection: {
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
    range:{
        type: DataTypes.STRING,
        defaultValue: 'bronze'
    },
    profile_picture: {
        type:DataTypes.STRING,
        defaultValue: '', 
    },
    total_post: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      
    },
    create_date :{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    total_comments: {
        type:DataTypes.INTEGER,
        defaultValue: 0,
    },
   role: {
    type: DataTypes.ENUM("user", "admin", "superadmin"), 
    defaultValue: 'user',
},
    count_state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },  
    total_get_like: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    total_give_like: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    code_confirm: {
        type: DataTypes.STRING,
        defaultValue: "",
    }

})
