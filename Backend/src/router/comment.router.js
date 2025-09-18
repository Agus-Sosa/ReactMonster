import express from 'express';
import { createComment, getCommentsByPost, deleteComment } from '../controller/comment.controller.js';
import { validateGetUserById } from '../middleware/validateUser.js';

const router = express.Router();

router.post('/:id_post', validateGetUserById, createComment);
router.get('/:id_post', getCommentsByPost);
router.delete('/:id_comment', validateGetUserById, deleteComment);

export default router;
