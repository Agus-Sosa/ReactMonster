import * as commentService from "../services/comment.service.js";

export const createComment = async (req, res, next) => {
  try {
    const id_user = req.user.id;
    const { id_post } = req.params;
    const { content } = req.body;
    const comment = await commentService.createComment(Number(id_user), Number(id_post), content);
    res.status(201).json(comment);
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
    const requesterId = req.user.id;
    const requesterRole = req.user.role;
    const deleted = await commentService.deleteComment(Number(id_comment), requesterId, requesterRole);
    res.json({ deleted: true, comment: deleted });
  } catch (err) {
    next(err);
  }
};
