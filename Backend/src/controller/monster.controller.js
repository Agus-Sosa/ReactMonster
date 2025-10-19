import MonsterService from "../services/monster.service.js";

class MonsterController { 
    constructor(){ 
        this.monsterService = new MonsterService();
    }


    /*Obtiene todos los monsters */
    async getAllMonsters(req, res, next) {
        try {
            const monsters = await this.monsterService.getAllMonster();
            res.status(200).json({status: "success", message:"Se obtuvieron los montruos con exito", monsters: monsters});
        } catch (error) {
            next(error);
        }
    }

    /*Obtiene monster por id */
    async getMonsterById(req, res, next) {
        try {
            const {id} =req.params;
            const monster = await this.monsterService.getMonsterById(id);
            res.status(200).json({status: "success", message: "Se obtuvo el monstruo con exito", monster:monster});
        } catch (error) {
            next(error)
        }
    }

    async createNewMonster(req, res, next) { 
        try {
            const monsterData = req.body;
            const newMonster = await this.monsterService.createNewMonster(monsterData);
            res.status(200).json({ status: "success", message: "Monstruo creado con exito", monster: newMonster });
            
        } catch (error) {
            next(error)
        }
    }

    async getMonsterByName(req, res, next) {
        try {
            const {monster_name} =req.body;
            const monster = await this.monsterService.getMonsterByName(monster_name);
            res.status(200).json({status: "success", message: "Se obtuvo el monstruo con exito", monster:monster});
        } catch (error) {
            next(error)
        }
    }


    async deleteMonsterById(req, res, next) {
        try {
            const { id } = req.params;
            await this.monsterService.deleteMonsterById(id);
            res.status(200).json({status: "success", message: "Monstruo eliminado con exito"});
        } catch (error) {
            next(error)
        }
    }
 
}


export default MonsterController;