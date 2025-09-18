import { Router } from "express";
import PostController from "../controller/post.controller.js";

const router = Router();
const postController=new PostController()

router.get('/', async(req, res, next)=>{
    await postController.getAllPost(req,res, next)
})

export {router as PostRouter};