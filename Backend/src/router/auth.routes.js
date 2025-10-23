import { Router } from "express";
import { validateNewUser, verifyLogin } from "../middleware/validateUser.js";
import AuthController from "../controller/auth.controller.js";


const router = Router();
const authController =new AuthController()


router.post('/login', verifyLogin ,async(req, res, next)=> {
    await authController.login(req, res, next);
})

router.post('/register', validateNewUser, async(req,res,next)=> {
    await authController.createNewUser(req, res,next);

})



export {router as AuthRouter};