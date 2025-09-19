import { User } from "../models/User.js";
import bcrypt from 'bcrypt'
class AuthService {
    constructor(){
        this.modelUser = User;
    }



    
    async createNewUser (newUser) {
        console.log(newUser)
        const existingEmail = await this.modelUser.findOne({where: {user_email: newUser.user_email}})
        const existingName = await this.modelUser.findOne({where: {user_name: newUser.user_name}})
        
        if(existingEmail) {
            const error = new Error("Ocurrio un error, verifique sus credenciales");
            error.status = 404;
            throw error;
            }

        if(existingName) {
            const error = new Error("Este nombre ya esta en uso");
            error.status = 404;
            throw error
        }


        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newUser.user_password, salt);
        
        await this.modelUser.create({
            ...newUser,
            user_password: hashPassword
        });
    }


    async login (email, password) {
        const user = User.findOne({where: {user_email : email}});
        if(!user) {
            const error = new Error("Usuario no encontrado, por favor verifique sus credenciales");
            error.status = 404;
            throw error;
        }


        const verifyPassword = bcrypt.compare(password, user.password)
        if(!verifyPassword) {

            const error = new Error("Contraseña incorrecta, por favor vuelva a intentarlo");
            error.status = 404;
            throw error;
        }

        return user;


    }


}



export default AuthService;
