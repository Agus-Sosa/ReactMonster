import { Router } from "express";
import CategoryController from "../controller/category.controller.js";
import { validateIdCategory} from "../middleware/validate.category.js";

const router = Router();
const categoriesController = new CategoryController();

router.get("/", async (req, res, next) => {
    return await categoriesController.getAllArenas(req, res, next);
});

router.get("/:id", validateIdCategory,  async (req, res, next) => {
    return await categoriesController.getArenaById(req, res, next);
});



export { router as categoriasRouter };
