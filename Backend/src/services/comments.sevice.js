import { Comments } from "../models/Comments.js";
import { Post } from "../models/Post.js";
import { User } from "../models/User.js";
import { sequelize } from "../config/db.js";

export const createComment = async (id_user, id_post, content) => {
  const t = await sequelize.transaction();
  try {
    const post = await Post.findByPk(id_post, { transaction: t });
    if (!post) throw new Error("Post not found");

    const comment = await Comments.create(
      { id_user, id_post, content },
      { transaction: t }
    );

    // contador comentarios
    await User.increment(
      { total_comments: 1 },
      { where: { id: id_user }, transaction: t }
    );

    await t.commit();
    return comment;
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

export const getCommentsByPost = async (id_post) => {
  return Comments.findAll({
    where: { id_post, coment_state: true },
    include: [
      {
        model: User,
        attributes: ["id", "user_name", "profile_picture"],
      },
    ],
    order: [["date", "ASC"]],
  });
};


export const deleteComment = async (id_comment, requesterId, requesterRole) => {
  const comment = await Comments.findByPk(id_comment);
  if (!comment) throw new Error("Comment not found");

  if (comment.id_user !== requesterId && requesterRole !== "admin") {
    const err = new Error("Not authorized to delete this comment");
    err.status = 403;
    throw err;
  }

  comment.coment_state = false;
  await comment.save();
  return comment;
};
