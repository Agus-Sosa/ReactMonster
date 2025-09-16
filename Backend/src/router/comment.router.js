import express from 'express';
import { createComment, getCommentsByPost, deleteComment } from '../controller/comment.controller.js';
import { validateUser } from '../middleware/validateUser.js';

const router = express.Router();

router.post('/:id_post', validateUser, createComment);
router.get('/:id_post', getCommentsByPost);
router.delete('/:id_comment', validateUser, deleteComment);

export default router;
