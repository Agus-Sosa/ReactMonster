import express from 'express';
import { validateGetUserById } from '../middleware/validateUser.js';
import LikeController from '../controller/like.controller.js';

const router = express.Router();
const likeController = new LikeController();

// Toggle like (POST /like/:id_post)
router.post('/post/:id_post/user/:id_user', async (req, res, next) => {
    return await likeController.toggleLike(req, res, next);
});

// Obtener cantidad de likes (GET /like/:id_post)
router.get('/:id_post', async (req, res, next) => {
    return await likeController.getLikes(req, res, next);
});

// Verificar si el usuario le dio like (GET /like/:id_post/check)
router.get('/:id_post/check', validateGetUserById, async (req, res, next) => {
    return await likeController.checkUserLike(req, res, next);
});

export { router as LikeRouter };
