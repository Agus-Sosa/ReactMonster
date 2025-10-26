import UserService from "../services/user.service.js";

class UserController {
    constructor(){
        this.userService = new UserService();
    }

    async getAllUser(req, res) {
        try {
            const users = await this.userService.getAllUser();
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({status: "error", message:"Error al obtener todos los usuarios"})
        }
    }

        async getUserByMail(req, res, next){
        try {
            const user_email= req.params.user_email;
            const user = await this.userService.getUserByMail(user_email);
            res.status(200).json({status: "success", user:user});
        } catch (error) {
            next(error)

        }
    }

    async getAdmins(req, res) {
        try {
            const admins = await this.userService.getAdmins();
            res.status(200).json(admins)
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

   

    async deleteUserById (req, res, next) {
        try {
            const {id}= req.params;
            const deletedUser = await this.userService.deleteUserById(id);
            res.status(200).json({status:"success", messgae:"Usuario eliminado con exito", deletedUser:deletedUser});
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