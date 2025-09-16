import * as likeService from "../services/like.service.js";

export const toggleLike = async (req, res, next) => {
  try {
    const id_user = req.user.id; // validateUser proveedor
    const { id_post } = req.params;
    const result = await likeService.toggleLike(Number(id_user), Number(id_post));
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getLikes = async (req, res, next) => {
  try {
    const { id_post } = req.params;
    const likes = await likeService.countLikes(Number(id_post));
    res.json({ id_post: Number(id_post), likes });
  } catch (err) {
    next(err);
  }
};

export const checkUserLike = async (req, res, next) => {
  try {
    const id_user = req.user.id;
    const { id_post } = req.params;
    const liked = await likeService.userLikedPost(Number(id_user), Number(id_post));
    res.json({ id_post: Number(id_post), liked });
  } catch (err) {
    next(err);
  }
};
