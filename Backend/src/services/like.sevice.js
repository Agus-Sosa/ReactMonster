import { Like } from "../models/Like.js";
import { Post } from "../models/Post.js";
import { User } from "../models/User.js";
import { sequelize } from "../config/db.js";

export const toggleLike = async (id_user, id_post) => {
  const t = await sequelize.transaction();
  try {
    const post = await Post.findByPk(id_post, { transaction: t });
    if (!post) {
      throw new Error("Post not found");
    }

    const existing = await Like.findOne({
      where: { id_user, id_post },
      transaction: t,
    });

    if (existing) {
      // quitar like
      await existing.destroy({ transaction: t });

      await Post.increment(
        { total_like: -1 },
        { where: { id_post }, transaction: t }
      );

      await User.increment(
        { total_get_like: -1 },
        { where: { id: post.id_user }, transaction: t }
      );

      await User.increment(
        { total_give_like: -1 },
        { where: { id: id_user }, transaction: t }
      );

      await t.commit();

      const updatedPost = await Post.findByPk(id_post);
      return { liked: false, total_like: updatedPost.total_like };
    } else {
      // crear like
      await Like.create({ id_user, id_post }, { transaction: t });

      await Post.increment(
        { total_like: 1 },
        { where: { id_post }, transaction: t }
      );

      await User.increment(
        { total_get_like: 1 },
        { where: { id: post.id_user }, transaction: t }
      );

      await User.increment(
        { total_give_like: 1 },
        { where: { id: id_user }, transaction: t }
      );

      await t.commit();

      const updatedPost = await Post.findByPk(id_post);
      return { liked: true, total_like: updatedPost.total_like };
    }
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

export const countLikes = async (id_post) => {
  return Like.count({ where: { id_post } });
};

export const userLikedPost = async (id_user, id_post) => {
  const existing = await Like.findOne({ where: { id_user, id_post } });
  return !!existing;
};
