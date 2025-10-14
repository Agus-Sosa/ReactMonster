import Categories from "../models/Categories.js";

class CategoryService {
  // Get all categories
  async getAll() {
    return await Categories.findAll();
  }

  // Get one category by ID
  async getById(id) {
    return await Categories.findByPk(id);
  }
}

export default new CategoryService();
