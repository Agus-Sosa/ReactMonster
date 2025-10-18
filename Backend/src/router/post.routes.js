import { Router } from "express";
import PostController from "../controller/post.controller.js";
import { verifyToken } from "../middleware/validateUser.js"; 
import { validateNewPost } from "../middleware/validatePost.js";

const router = Router();
const postController = new PostController();


router.get("/", async (req, res, next) => {
  await postController.getAllPost(req, res, next);
});

router.get("/:id", async (req, res, next) => {
  await postController.getPostById(req, res, next);
});

router.get("/categorias/:id", async (req, res, next) => {
  await postController.getPostByCategory(req, res, next);
});

//JWT
router.post("/newPost", verifyToken, validateNewPost, async (req, res, next) => {
  await postController.createNewPost(req, res, next);
});

router.delete("/:id", verifyToken, async (req, res, next) => {
  await postController.deletePost(req, res, next);
});

router.put("/:id", verifyToken, async (req, res, next) => {
  await postController.updatePost(req, res, next);
});

export { router as PostRouter };
