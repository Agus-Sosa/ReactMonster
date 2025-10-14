import Post from "../models/Post.js";
import Categories from "../models/Categories.js";

class PostService {
  async getAll() {
    return await Post.findAll({ include: Categories });
  }
  async create(newPost) {
    return await Post.create(newPost);
  }
  async getByCategory(idCategory) {
    return await Post.findAll({
      where: { id_category: idCategory },
      include: Categories,
    });
  }
}

export default new PostService();
