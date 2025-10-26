import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import { Post } from "../models/Post.js";
class UserService {
    constructor(){
        this.modelUser = User
        this.modelPost = Post;
    }


    async getAllUser () {
        return await this.modelUser.findAll();
    }

    async getUserByMail (user_email) {
        return await this.modelUser.findAll({
            where: { user_email },
        });
    }

    async getAdmins () {
        return await this.modelUser.findAll({
            where: { role : "admin" },
        });
    }

    async getUserById (id) {
        const user = await this.modelUser.findByPk(id, {
            include: [{
                model: this.modelPost,
                as: 'Posts', // Sequelize pluraliza el nombre del modelo por defecto
                attributes: [
                    "id_post",
                    "title",
                    "resume",
                    "id_category",
                    "content",
                    "imgContent",
                    "date",
                ]
            }]
        });
    
            if(!user) {
                const error = new Error("Usuario no encontrado");
                error.status = 404;
                throw error;
            }

        return user;
    }   



    async updateUser (id_user,newUpdate) {
        
        const [updateData]= await this.modelUser.update(newUpdate, {where:{id_user: id_user}});
    
    
        if(updateData ===0) {
            throw new Error("No hay cambios");
        }

        return await this.modelUser.findByPk(id_user);
    }

    async deleteUserById(id) {
        console.log("user id:", id)
        const user = await this.modelUser.findByPk(id);

        if(!user) {
            const error = new Error("Usuario no encontrado");
            error.status = 404;
            throw error;
        }

        const deletedUser =  await user.update({ count_state: false, user_name: "Usuario eliminado" , profile_picture: "https://i.ibb.co/67w66kC8/20251025-2346-Avatar-de-Despedida-simple-compose-01k8f6fn84fyeb1pxqs5pemc4e.png"})
        return deletedUser;
    }

}


export default UserService; 