import PostService from "../services/post.service.js";

class PostController {
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async create(req, res) {
    try {
      const { title, content, id_category } = req.body;
      const post = await PostService.create({ title, content, id_category });
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getByCategory(req, res) {
    try {
      const { id } = req.params;
      const posts = await PostService.getByCategory(id);
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new PostController();
