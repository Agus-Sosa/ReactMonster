import { Router } from "express";
import categoryController from "../controller/category.controller.js";

const categoriasRouter = Router();

categoriasRouter.get("/", (req, res) => categoryController.getAll(req, res));
categoriasRouter.get("/:id", (req, res) => categoryController.getById(req, res));

export { categoriasRouter };
