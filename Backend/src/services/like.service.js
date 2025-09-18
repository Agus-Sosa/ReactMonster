import { Like } from '../models/Like.js';

export const toggleLike = async (id_user, id_post) => {
  const existing = await Like.findOne({ where: { id_user, id_post } });

  if (existing) {
    await existing.destroy();
    return { liked: false };
  } else {
    const newLike = await Like.create({ id_user, id_post });
    return { liked: true, like: newLike };
  }
};

export const countLikes = async (id_post) => {
  return await Like.count({ where: { id_post } });
};

export const userLikedPost = async (id_user, id_post) => {
  const existing = await Like.findOne({ where: { id_user, id_post } });
  return !!existing;
};
