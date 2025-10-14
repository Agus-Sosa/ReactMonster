import express from 'express';
import CommentController from '../controller/comment.controller.js';
import { validateGetUserById } from '../middleware/validateUser.js';
import { validateComment } from '../middleware/validateComment.js';

const router = express.Router();
const commentController = new CommentController();

router.post('/:id_post', validateGetUserById, validateComment, async (req, res, next) => {
  try {
    await commentController.createComment(req, res, next);
  } catch (err) {
    next(err);
  }
});

router.get('/:id_post', async (req, res, next) => {
  try {
    await commentController.getCommentsByPost(req, res, next);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id_comment', validateGetUserById, async (req, res, next) => {
  try {
    await commentController.deleteComment(req, res, next);
  } catch (err) {
    next(err);
  }
});

export { router as CommentRouter };
