import { User, Comments } from "../models/index.js";

class CommentService {
  constructor() {
    this.modelComment = Comments;
  }

  async createComment(id_user, id_post, commentText) {
    return await this.modelComment.create({
      id_user,
      id_post,
      comment: commentText,
      edited: false,
      comment_state: true
    });
  }
  async getCommentsByPost(id_post) {
    return await this.modelComment.findAll({
      where: { id_post, comment_state: true },
      order: [["date", "ASC"]],
      include: [
      {
        model: User,
        attributes: ["user_name","range"],
    }]});
  }

  async deleteComment(id_comment, requesterId) {
    const comment = await this.modelComment.findByPk(id_comment);
    if (!comment) throw new Error("Comentario no encontrado");

    if (comment.id_user !== requesterId) {
    const err = new Error("No autorizado");
    err.status = 403;
    throw err;
  }

    comment.comment_state = false;
    await comment.save();
    return comment;
  }
}

export default CommentService;
