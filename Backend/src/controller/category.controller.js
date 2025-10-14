import CategoryService from "../services/category.service.js";

class CategoryController {
  // Get all categories
  async getAll(req, res) {
    try {
      const categorias = await CategoryService.getAll();
      res.status(200).json({ categorias });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Get one category by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const category = await CategoryService.getById(id);
      if (!category) return res.status(404).json({ error: "Category not found" });
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new CategoryController();
