import { Router } from "express";
import UserController from "../controller/user.controller.js";
import { validateNewUser } from "../middleware/validateUser.js";



const router = Router();
const userController = new  UserController()
router.get('/', async(req, res)=> {
    await userController.getAllUser(req, res);
})

router.get("/:id", async(req, res)=> {
    await userController.getUserById(req,res);
})  


router.delete("/:id", async(req,res)=> {
    await userController.deleteUserById(req,res)
})


router.post('/',validateNewUser, async(req, res)=>{ 
    await userController.createNewUser(req, res)
})




export {router as UserRouter};
