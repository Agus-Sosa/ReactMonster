import CategoryService from "../services/category.service.js";

class CategoryController {
    constructor() {
        this.categoryService = new CategoryService();
    }
/* obtener todas las categorias */
    async getAllCategories(req, res, next) {
        try {
            const categorias = await this.categoryService.getAllCategories();
            res.status(200).json({
                status: "success",
                message: "Se obtuvieron las categorias con exito",
                categorias: categorias
            });
        } catch (error) {
            next(error);
        }
    }
/*obtiene las categorias por id */
    async getCategoryById(req, res, next) {
        try {
            const { id } = req.params;
            const categorias = await this.categoryService.getCategoryById(id);
            res.status(200).json({
                status: "success",
                message: "Se obtuvo las categorias con exito",
                categorias: categorias
            });
        } catch (error) {
            next(error);
        }
    }

    
}

export default CategoryController;