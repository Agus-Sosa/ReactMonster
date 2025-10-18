import { Router } from "express";
import UserController from "../controller/user.controller.js";
import { validateGetUserById, validateNewUser, verifyLogin } from "../middleware/validateUser.js";
import { isAdmin, verifyToken } from "../middleware/validateUser.js";



const router = Router();
const userController = new  UserController()



router.get('/', async(req, res)=> {
    await userController.getAllUser(req, res);
})
router.get('/email/:user_email',verifyToken,isAdmin, async(req, res)=> {
    await userController.getUserByMail(req, res);
})
router.get("/:id", validateGetUserById,async(req, res, next)=> {
    await userController.getUserById(req,res, next);
})  


router.delete("/:id",validateGetUserById, async(req,res, next)=> {
    await userController.deleteUserById(req,res, next)
})


router.post('/register',validateNewUser, async(req, res, next)=>{ 
    await userController.createNewUser(req, res, next)
})

router.put('/:id',verifyToken,isAdmin, async(req, res, next)=> {
    await userController.updateUser(req, res, next)
} )




export {router as UserRouter};
