import { Like } from "../models/Like.js";

class LikeService {
  constructor() {
    this.modelLike = Like;
  }

  // Toggle like: si existe lo elimina, si no lo crea
  async toggleLike(id_user, id_post) {
    const existing = await this.modelLike.findOne({ where: { id_user, id_post } });

    if (existing) {
      await existing.destroy();
      return { liked: false };
    } else {
      const newLike = await this.modelLike.create({ id_user, id_post });
      return { liked: true, like: newLike };
    }
  }

  // Contar likes de un post
  async countLikes(id_post) {
    return await this.modelLike.count({ where: { id_post } });
  }

  // Verificar si un usuario le dio like a un post
  async userLikedPost(id_user, id_post) {
    const existing = await this.modelLike.findOne({ where: { id_user, id_post } });
    return !!existing;
  }
}

export default LikeService;
