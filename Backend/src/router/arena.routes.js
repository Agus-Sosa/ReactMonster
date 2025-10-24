import { Router } from "express";
import ArenaController from "../controller/arena.controller.js";
import { validateIdArena, validateNameArena, validateInputArena } from "../middleware/validateArena.js";
import { isAdmin, verifyToken } from "../middleware/validateUser.js";


const router = Router();
const arenaController = new ArenaController();

router.get("/", async (req, res, next) => {
    return await arenaController.getAllArenas(req, res, next);
});

router.get("/:id", validateIdArena, async (req, res, next) => {
    return await arenaController.getArenaById(req, res, next);
});

router.get("/name", validateNameArena, async (req, res, next) => {
    return await arenaController.create(req, res, next);
});

router.put("/:id", validateInputArena, validateIdArena, async (req, res, next) => {
    return await arenaController.update(req, res, next);
})
router.delete("/:id",  validateIdArena, async (req, res, next) => {
    return await arenaController.delete(req, res, next);
})
router.post("/",  validateInputArena, async (req, res, next) => {
    return await arenaController.create(req, res, next);
})

export { router as ArenaRouter };
