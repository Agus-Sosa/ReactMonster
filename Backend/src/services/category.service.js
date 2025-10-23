import { Categories } from "../models/Categories.js";

class CategoryService {
    constructor() {
        this.modelCategory = Categories;
    }

    async getAllCategories() {
        const categorias = await this.modelCategory.findAll();
        return categorias;
    }

    async getCategoryById(id) {
        const categorias = await this.modelCategory.findByPk(id);
        return categorias;
    }


    async createCtegory(data) {
        const categorias = await this.modelCategory.create(data);
        return categorias;
    }

    async deleteArena(id) {
        const deleted = await this.modelCategory.destroy({
            where: { id }
        });
        return deleted;
    }
}

export default CategoryService;
