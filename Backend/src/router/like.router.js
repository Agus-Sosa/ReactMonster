import express from 'express';
import { toggleLike, getLikes, checkUserLike } from '../controller/like.controller.js';
import { validateGetUserById } from '../middleware/validateUser.js'; // similar al comment router

const router = express.Router();

router.post('/:id_post', validateGetUserById, toggleLike);
router.get('/:id_post', getLikes);
router.get('/:id_post/check', validateGetUserById, checkUserLike);

export default router;
