import { Post } from "../models/Post.js";

class PostService {
  constructor() {
    this.modelPost = Post;
  }

  async getAllPost() {
    return await this.modelPost.findAll();
  }

  async getPostById(id) {
    return await this.modelPost.findByPk(id);
  }

  async getPostByCategory(id) {
    return await this.modelPost.findAll({
      where: {
        id_category: id,
        // deleted: false //  exclude soft-deleted esto es una giga miarda 
      }
    });
  }
    
  async createNewPost(newPost) {
    return await this.modelPost.create(newPost);
  }

  async softDeletePost(idPost) {
    const post = await this.modelPost.findByPk(idPost);
    if (!post) throw new Error("Post NO encontrado");
    post.deleted = true;
    await post.save();
  }

  async revertPost(idPost) {
    const post = await this.modelPost.findByPk(idPost);
    if (!post) throw new Error("Post NO encontrado");
    post.deleted = false;
    await post.save();
  }

  async updatePost(idPost, newPost) {
    const [updateData] = await this.modelPost.update(newPost, {
      where: { idPost }
    });

    if (updateData === 0) {
      throw new Error("No hay cambio");
    }

    return await this.modelPost.findByPk(idPost);
  }
}

export default PostService;
