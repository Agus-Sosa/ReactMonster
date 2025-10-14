import { Router } from "express";
import postController from "../controller/post.controller.js";

const PostRouter = Router();

PostRouter.get("/allposts", (req, res) => postController.getAll(req, res));
PostRouter.post("/newPost", (req, res) => postController.create(req, res));
PostRouter.get("/categories/:id", (req, res) => postController.getByCategory(req, res));

export { PostRouter };
