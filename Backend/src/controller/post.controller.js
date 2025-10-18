import PostService from "../services/post.service.js";

class PostController {
  constructor() {
    this.postService = new PostService();
  }

  async getAllPost(req, res, next) {
    try {
      const post = await this.postService.getAllPost();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ status: "error", message: "Error al obtener todas las publicaciones" });
    }
  }

  async getPostById(req, res, next) {
    try {
      const id = req.params.id;
      const post = await this.postService.getPostById(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ status: "error", message: "Error al obtener la publicacion por ID" });
    }
  }

  async getPostByCategory(req, res, next) {
    try {
      const id = req.params.id;
      const post = await this.postService.getPostByCategory(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ status: "error", message: "Error al obtener las publicaciones por categoria" });
    }
  }

  async createNewPost(req, res, next) {
    try {
      const { title, resume, content, id_category } = req.body;
      const id_user = req.user.id;

      const newPostData = { title, resume, content, id_category, id_user };
      console.log("createNewPost →", newPostData);

      const post = await this.postService.createNewPost(newPostData);
      return res.status(201).json({ status: "success", newPost: post });
    } catch (error) {
      console.error("/post/newPost error:", error.name, error.message, error.errors);
      next(error);
    }
  }

  async deletePost(req, res, next) {
    try {
      const { id } = req.params;
      await this.postService.softDeletePost(id); // ← soft delete
      res.status(200).json({ status: "success", message: "Post Bloqueado" });
    } catch (error) {
      next(error);
    }
  }

  async revertPost(req, res, next) {
    try {
      const { id } = req.params;
      await this.postService.revertPost(id); // ← restore post
      res.status(200).json({ status: "success", message: "Post Restablecido" });
    } catch (error) {
      next(error);
    }
  }

  async updatePost(req, res, next) {
    try {
      const { id } = req.params;
      const newPost = req.body;
      const updatePost = await this.postService.updatePost(id, newPost);
      res.status(200).json({ status: "success", post: updatePost });
    } catch (error) {
      next(error);
    }
  }
}

export default PostController;
