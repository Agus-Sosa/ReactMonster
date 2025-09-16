import * as commentService from '../services/comment.service.js';

export const createComment = async (req, res, next) => {
  try {
    const { id_user } = req.user;
    const { id_post } = req.params;
    const { comment } = req.body;

    const newComment = await commentService.createComment(id_user, Number(id_post), comment);
    res.status(201).json(newComment);
  } catch (err) {
    next(err);
  }
};

export const getCommentsByPost = async (req, res, next) => {
  try {
    const { id_post } = req.params;
    const comments = await commentService.getCommentsByPost(Number(id_post));
    res.json(comments);
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const { id_comment } = req.params;
    const { id_user, role } = req.user;

    const deleted = await commentService.deleteComment(Number(id_comment), id_user, role);
    res.json(deleted);
  } catch (err) {
    next(err);
  }
};
