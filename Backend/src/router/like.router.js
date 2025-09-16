import express from 'express';
import { toggleLike, getLikes, checkUserLike } from '../controller/like.controller.js';
import { validateUser } from '../middleware/validateUser.js';

const router = express.Router();

router.post('/:id_post', validateUser, toggleLike);
router.get('/:id_post', getLikes);
router.get('/:id_post/check', validateUser, checkUserLike);

export default router;
