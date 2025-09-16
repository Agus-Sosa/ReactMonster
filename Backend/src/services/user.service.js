import { User } from "../models/User.js";

class UserService {
    constructor(){
        this.modelUser = User
    }


    async getAllUser () {
        return await this.modelUser.findAll();
    }


    async getUserById (id) {
        return await this.modelUser.findByPk(id);
    }


    async createNewUser (newUser) {
        const existingEmail = await this.modelUser.findOne({where: {user_email: newUser.user_email}})
        const existingName = await this.modelUser.findOne({where: {user_name: newUser.user_name}})
        
        if(existingEmail) throw new Error("El email ya fue registrado anteriomente");
        if(existingName) throw new Error("El nombre ya esta en uso");

        return await this.modelUser.create(newUser);
    }


    async updateUser (id,newUpdate) {
        
        const [updateData]= await this.modelUser.update(newUpdate, {where:{id}});
    
    
        if(updateData ===0) {
            throw new Error("No hay cambios");
        }

        return await this.modelUser.findByPk(id);

    }

    async deleteUserById(id) {
        return await this.modelUser.destroy({
            where: {id} 
        });
    }

}


export default UserService;