import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
class UserService {
    constructor(){
        this.modelUser = User
    }


    async getAllUser () {
        return await this.modelUser.findAll();
    }

    async getUserByMail (user_email) {
        return await this.modelUser.findAll({
            where: { user_email },
        });
    }

    async getUserById (id) {
        const user = await this.modelUser.findByPk(id);
    
            if(!user) {
                const error = new Error("Usuario no encontrado");
                error.status = 404;
                throw error;
            }

        return user;
    }   



    async updateUser (id_user,newUpdate) {
        
        const [updateData]= await this.modelUser.update(newUpdate, {where:{id_user}});
    
    
        if(updateData ===0) {
            throw new Error("No hay cambios");
        }

        return await this.modelUser.findByPk(id_user);
    }

    async desactivateUserById(id) {
        const user = await this.modelUser.findByPk(id);

        if(!user) {
            const error = new Error("Usuario no encontrado");
            error.status = 404;
            throw error;
        }

        return await user.update({count_state: false})
    }

}


export default UserService;