import CommentService from "../services/comment.service.js";

class CommentController {
  constructor() {
    this.commentService = new CommentService();
  }

  // Crear un comentario
  async createComment(req, res, next) {
    try {
      const { id_user } = req.user;
      const { id_post } = req.params;
      const { comment } = req.body;

      const newComment = await this.commentService.createComment(
        id_user,
        Number(id_post),
        comment
      );

      res.status(201).json(newComment);
    } catch (err) {
      next(err);
    }
  }

  // Obtener comentarios de un post
  async getCommentsByPost(req, res, next) {
    try {
      const { id_post } = req.params;
      const comments = await this.commentService.getCommentsByPost(Number(id_post));
      res.json(comments);
    } catch (err) {
      next(err);
    }
  }

  // Eliminar comentario
  async deleteComment(req, res, next) {
    try {
      const { id_comment } = req.params;
      const { id_user, role } = req.user;

      const deleted = await this.commentService.deleteComment(
        Number(id_comment),
        id_user,
        role
      );

      res.json(deleted);
    } catch (err) {
      next(err);
    }
  }
}

export default CommentController;
