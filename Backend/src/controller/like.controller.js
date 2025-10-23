import LikeService from "../services/like.service.js";


class LikeController {
  constructor() {
    this.likeService = new LikeService();
  }

  // Alternar like
  async toggleLike(req, res, next) {
    try {
      const { id_post, id_user } = req.params;

      const result = await this.likeService.toggleLike(id_user, id_post);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  // Contar likes de un post
  async getLikes(req, res, next) {
    try {
      const { id_post } = req.params;
      const count = await this.likeService.countLikes(Number(id_post));
      res.json({ likes: count });
    } catch (err) {
      next(err);
    }
  }

  // Verificar si el usuario le dio like a un post
  async checkUserLike(req, res, next) {
    try {
      const {id_user} = Number(req.headers["x-user-id"]);
      const { id_post } = req.params;

      const liked = await this.likeService.userLikedPost(id_user, Number(id_post));
      res.json({ liked });
    } catch (err) {
      next(err);
    }
  }
}

export default LikeController;
