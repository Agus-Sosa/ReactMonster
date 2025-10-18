import { Router } from "express";
import PostController from "../controller/post.controller.js";
import { verifyToken, isAdmin } from "../middleware/validateUser.js";
import { validateNewPost } from "../middleware/validatePost.js";

const router = Router();
const postController = new PostController();

// Get all posts
router.get("/", async (req, res, next) => {
  await postController.getAllPost(req, res, next);
});

// Get post by ID
router.get("/:id", async (req, res, next) => {
  await postController.getPostById(req, res, next);
});

// Get posts by category
router.get("/categorias/:id", async (req, res, next) => {
  await postController.getPostByCategory(req, res, next);
});

// Create new post (requires JWT + validation)
router.post("/newPost", verifyToken, validateNewPost, async (req, res, next) => {
  await postController.createNewPost(req, res, next);
});

// Soft delete post (admin only)
router.delete("/:id", verifyToken, isAdmin, async (req, res, next) => {
  await postController.deletePost(req, res, next);
});

// Revert deleted post (admin only)
router.put("/revert/:id", verifyToken, isAdmin, async (req, res, next) => {
  await postController.revertPost(req, res, next);
});

// Update post (requires JWT)
router.put("/:id", verifyToken, async (req, res, next) => {
  await postController.updatePost(req, res, next);
});

export { router as PostRouter };
