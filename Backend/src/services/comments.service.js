import { Comments } from '../models/Comments.js';

export const createComment = async (id_user, id_post, commentText) => {
  return await Comments.create({
    id_user,
    id_post,
    comment: commentText,
    edited: false,
    comment_state: true
  });
};

export const getCommentsByPost = async (id_post) => {
  return await Comments.findAll({
    where: { id_post, comment_state: true },
    order: [['date', 'ASC']]
  });
};

export const deleteComment = async (id_comment, requesterId, requesterRole) => {
  const comment = await Comments.findByPk(id_comment);
  if (!comment) throw new Error('Comentario no encontrado');

  if (comment.id_user !== requesterId && requesterRole !== 'admin') {
    const err = new Error('No autorizado');
    err.status = 403;
    throw err;
  }

  comment.comment_state = false;
  await comment.save();
  return comment;
};
