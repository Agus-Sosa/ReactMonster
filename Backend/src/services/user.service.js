import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
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
        
        if(existingEmail) throw new Error("Ocurrio un error, verifique sus credenciales");
        if(existingName) throw new Error("El nombre ya esta en uso");


        const salt = await bcrypt.genSalt(10);
        
        const hashPassword = await bcrypt.hash(newUser.user_password, salt);
        
        await this.modelUser.create({
            ...newUser,
            user_password: hashPassword
        });
    }


    async updateUser (id,newUpdate) {
        
        const [updateData]= await this.modelUser.update(newUpdate, {where:{id}});
    
    
        if(updateData ===0) {
            throw new Error("No hay cambios");
        }

        return await this.modelUser.findByPk(id);
    }

    async desactivateUserById(id) {
        const user = await this.modelUser.findByPk(id);
        return await user.update({count_state: false})
    }

}


export default UserService;