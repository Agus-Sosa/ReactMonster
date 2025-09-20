import { Router } from "express";
import ArenaController from "../controller/arena.controller.js";
import { validateIdArena, validateNameArena } from "../middleware/validateArena.js";

const router = Router();
const arenaController = new ArenaController();

router.get("/", async (req, res, next) => {
    return await arenaController.getAllArenas(req, res, next);
});

router.get("/:id", validateIdArena,  async (req, res, next) => {
    return await arenaController.getArenaById(req, res, next);
});

router.post("/name", validateNameArena,  async (req, res, next) => {
    return await arenaController.getArenaByName(req, res, next);
});

export { router as ArenaRouter };
