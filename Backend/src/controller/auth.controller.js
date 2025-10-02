import AuthService from "../services/auth.service.js";
import jwt from 'jsonwebtoken'
class AuthController {
    constructor(){
        this.authService = new AuthService();
    }


    async login (req,res,next) {
        try {
        const {user_email, user_password} = req.body;
        const user = await this.authService.login(user_email, user_password);
        
    
            const token = jwt.sign(
                
                {id:user.id_user, user_name: user.user_name, user_email: user.user_email , role:user.role, profile_picture: user.profile_picture },
                "react_monsters", // Esto despues hay que cambiarlo y ponerlo en un .ENV 👟👟👟👟👟
                {expiresIn:'1h'}
            )



        res.status(200).json({status:"success", message: "se logueo con exito", token:token});
        } catch (error) {
            next(error)
        }
    }
    /*Crea un nuevo usuario */
    async createNewUser (req, res, next) {
        try {
            const {user_name, user_email, user_password}= req.body;
            const newUser = {
                user_name, 
                user_email, 
                user_password
            };
            const user =await this.authService.createNewUser(newUser);
            res.status(200).json({status:"success", message:"usuario creado con exito"});
        } catch (error) {
            next(error)
        }
    }


}


export default AuthController;