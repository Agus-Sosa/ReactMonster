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

        if(existingEmail) throw new Error("El email ya fue registrado anteriomente");
    
        return await this.modelUser.create(newUser);
    }


    async updateUser (newUpdate) {
        return await this.modelUser.update(newUpdate);
    }

    async deleteUserById(id) {
        return await this.modelUser.destroy({
            where: {id} 
        });
    }

}


export default UserService;