import { Arena } from "../models/Arena.js";

class ArenaService {
    constructor() {
        this.modelArena = Arena;
    }

    async getAllArenas() {
        const arenas = await this.modelArena.findAll();
        return arenas;
    }

    async getArenaById(id) {
        const arena = await this.modelArena.findByPk(id);
        return arena;
    }

    async getArenaByName(arenaName) {
        const arena = await this.modelArena.findOne({
            where: { arena_name: arenaName }
        });
        return arena;
    }

    async createArena(data) {
        const arena = await this.modelArena.create(data);
        return arena;
    }

    async updateArena(id, data ) {
        const entity = await this.modelArena.findByPk(id)
        await entity.update(data)
        return entity;
    }

    async deleteArena(id) {
        const deleted = await this.modelArena.destroy({
            where: { id }
        });
        return deleted;
    }
}

export default ArenaService;
