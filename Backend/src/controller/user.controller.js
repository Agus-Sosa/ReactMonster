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

    async getUserById(req, res, next){
        try {
            const id= req.params.id;
            const user = await this.userService.getUserById(id);
            res.status(200).json({status: "success", user:user});
        } catch (error) {
            next(error)

        }
    }

    async createNewUser (req, res, next) {
        try {
            const {user_name, user_email, user_password}= req.body;
            const newUser = {
                user_name, 
                user_email, 
                user_password
            };
            const user =await this.userService.createNewUser(newUser);
            res.status(200).json({status:"success", message:"usuario creado con exito"});
        } catch (error) {
            next(error)
        }
    }

    async deleteUserById (req, res, next) {
        try {
            const {id}= req.params;
            await this.userService.desactivateUserById(id);
            await res.status(200).json({status:"success", messgae:"Usuario eliminado con exito"})
        } catch (error) {
            next(error)
        }
    }

    async updateUser(req,res,next) {
        try {
            const {id}=req.params;
            const newData = req.body;

            const updateUser = await this.userService.updateUser(id, newData);
            res.status(200).json({status: "success", data:updateUser})

        } catch (error) {
            next(error);
        }
    } 


}


export default UserController;