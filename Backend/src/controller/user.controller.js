import UserService from "../services/user.service.js";

class UserController {
    constructor(){
        this.userService = new UserService();
    }


    async getAllUser (req, res) {
        try {
            const users = await this.userService.getAllUser();
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({status: "error", message:"Error al obtener todos los usuarios"})
        }
    }

    async getUserById(req, res){
        try {
            const id= req.params.id;
            const user = await this.userService.getUserById(id);
            await res.status(200).json({status: "success", user:user});
        } catch (error) {
            res.status(500).json({status:"error", error:error.message})
        }
    }




    async createNewUser (req, res) {
        try {
            const {user_name, user_email, user_password}= req.body;
            const newUser = {
                user_name, 
                user_email, 
                user_password
            };
            await this.userService.createNewUser(newUser);
            res.status(200).json({status:"success", newUser:newUser});
        } catch (error) {
            console.log(error.message,'error')
            res.status(500).json({status: "error", message:"Error al crear el usuario"})
        }
    }

    async deleteUserById (req, res) {
        try {
            const {id}= req.params;
            await this.userService.deleteUserById(id);
            await res.status(200).json({status:"success", messgae:"Usuario eliminado con exito"})
        } catch (error) {
            res.status(500).json({status: "error", error:error.message});
        }
    }


}


export default UserController;