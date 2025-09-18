import * as likeService from '../services/like.service.js';

export const toggleLike = async (req, res, next) => {
  try {
    const { id_user } = req.user;
    const { id_post } = req.params;

    const result = await likeService.toggleLike(id_user, Number(id_post));
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getLikes = async (req, res, next) => {
  try {
    const { id_post } = req.params;
    const count = await likeService.countLikes(Number(id_post));
    res.json({ likes: count });
  } catch (err) {
    next(err);
  }
};

export const checkUserLike = async (req, res, next) => {
  try {
    const { id_user } = req.user;
    const { id_post } = req.params;

    const liked = await likeService.userLikedPost(id_user, Number(id_post));
    res.json({ liked });
  } catch (err) {
    next(err);
  }
};
