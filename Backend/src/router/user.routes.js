import { Router } from "express";
import UserController from "../controller/user.controller.js";
import { validateGetUserById, validateNewUser } from "../middleware/validateUser.js";



const router = Router();
const userController = new  UserController()



router.get('/', async(req, res)=> {
    await userController.getAllUser(req, res);
})

router.get("/:id", validateGetUserById,async(req, res, next)=> {
    await userController.getUserById(req,res, next);
})  


router.delete("/:id",validateGetUserById, async(req,res, next)=> {
    await userController.deleteUserById(req,res, next)
})


router.post('/',validateNewUser, async(req, res, next)=>{ 
    await userController.createNewUser(req, res, next)
})

router.put('/:id', async(req, res, next)=> {
    await userController.updateUser(req, res, next)
} )




export {router as UserRouter};
