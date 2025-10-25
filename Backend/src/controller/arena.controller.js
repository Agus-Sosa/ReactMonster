import { response } from "express";
import ArenaService from "../services/arena.service.js";

class ArenaController {
    constructor() {
        this.arenaService = new ArenaService();
    }

    // Get all Arenas 
    
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

    //Gets the arenas by id 

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

    // update arenas

    async update(req, res, next) {
        const { id } = req.params;
        const { arena_name, arena_description, arena_image_url } = req.body;
        const data = {
            arena_name,
            arena_description,
            arena_image_url
        };
        try {
            await this.arenaService.updateArena(id, data);
            res.status(200).json({status: "success", data: data});
        } catch (error) {
            res.status(404).json({message : "no se pudo actualizar"});
        }
    }

    
// remove Arenas

     async delete(req, res, next) {
        const { id } = req.params;
        try {
            await this.arenaService.deleteArena(id);
            res.status(200).json({ message: "arena eliminada" });
        } catch (error) {
            res.status(404).json({ message: "error al eliminar arena" });
        }
    }
    
    
    //create arenas
    
    async create(req, res, next) {
        const { arena_name, arena_description, arena_image_url } = req.body;
        const data = {
            arena_name,
            arena_description,
            arena_image_url,
            
        }
        try {
            await this.arenaService.createArena(data)
            res.status(200).json({status: "success", message:"arena creada", data: data})
        } catch (error) {
            console.error("Error al crear la arena:", error);
            res.status(500).json({
                status: "error",
                message: "No se pudo crear la arena"
            });
        }
    }


    /*Gets the arenas by name */
    
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
