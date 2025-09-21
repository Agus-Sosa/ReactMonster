import express from 'express';
import CommentController from '../controller/comment.controller.js';
import { validateGetUserById } from '../middleware/validateUser.js';

const router = express.Router();
const commentController = new CommentController();

// Crear comentario (POST /comments/:id_post)
router.post('/:id_post', validateGetUserById, async (req, res, next) => {
    return await commentController.createComment(req, res, next);
});

// Obtener comentarios de un post (GET /comments/:id_post)
router.get('/:id_post', async (req, res, next) => {
    return await commentController.getCommentsByPost(req, res, next);
});

// Eliminar comentario (DELETE /comments/:id_comment)
router.delete('/:id_comment', validateGetUserById, async (req, res, next) => {
    return await commentController.deleteComment(req, res, next);
});

export { router as CommentRouter };
