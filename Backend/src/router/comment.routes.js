import express from 'express';
import CommentController from '../controller/comment.controller.js';
import { validateComment } from '../middleware/validateComment.js';
import { isAdmin, verifyToken } from "../middleware/validateUser.js";

const router = express.Router();
const commentController = new CommentController();

router.post('/:id_post',verifyToken, validateComment, async (req, res, next) => {
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

router.delete('/:id_comment',verifyToken, async (req, res, next) => {
  try {
    await commentController.deleteComment(req, res, next);
  } catch (err) {
    next(err);
  }
});

export { router as CommentRouter };
