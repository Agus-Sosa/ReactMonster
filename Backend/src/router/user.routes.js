import { Router } from "express";
import UserController from "../controller/user.controller.js";
import { validateGetUserById, validateNewUser } from "../middleware/validateUser.js";



const router = Router();
const userController = new  UserController()



router.get('/', async(req, res)=> {
    await userController.getAllUser(req, res);
})

router.get("/:id", validateGetUserById,async(req, res)=> {
    await userController.getUserById(req,res);
})  


router.delete("/:id",validateGetUserById, async(req,res)=> {
    await userController.deleteUserById(req,res)
})


router.post('/',validateNewUser, async(req, res)=>{ 
    await userController.createNewUser(req, res)
})




export {router as UserRouter};
