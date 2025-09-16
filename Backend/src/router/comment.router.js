import express from "express";
import { createComment, getCommentsByPost, deleteComment } from "../controller/comment.controller.js";
import { validateUser } from "../middleware/validateUser.js";

const router = express.Router();

router.post("/:id_post", validateUser, createComment);     // crear comentario
router.get("/:id_post", getCommentsByPost);                 // listar comentarios de post
router.delete("/:id_comment", validateUser, deleteComment); // borrar (soft) comentario

export default router;
