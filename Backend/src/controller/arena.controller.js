import ArenaService from "../services/arena.service.js";

class ArenaController {
    constructor() {
        this.arenaService = new ArenaService();
    }

    async getAllArenas(req, res, next) {
        try {
            const arenas = await this.arenaService.getAllArenas();
            res.status(200).json({
                status: "success",
                message: "Se obtuvieron las arenas con éxito",
                arenas: arenas
            });
        } catch (error) {
            next(error);
        }
    }

    async getArenaById(req, res, next) {
        try {
            const { id } = req.params;
            const arena = await this.arenaService.getArenaById(id);
            res.status(200).json({
                status: "success",
                message: "Se obtuvo la arena con éxito",
                arena: arena
            });
        } catch (error) {
            next(error);
        }
    }

    async getArenaByName(req, res, next) {
        try {
            const { arena_name } = req.body;
            const arena = await this.arenaService.getArenaByName(arena_name);
            res.status(200).json({
                status: "success",
                message: "Se obtuvo la arena con éxito",
                arena: arena
            });
        } catch (error) {
            next(error);
        }
    }
}

export default ArenaController;
