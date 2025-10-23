import { Monster } from "../models/Monster.js";

class MonsterService {
    constructor(){
        this.modelMonster = Monster;
    }


    async getAllMonster() {
        const monsters = await this.modelMonster.findAll();
        return monsters;
    }


    async createNewMonster(newMonster) {
        const monster = await this.modelMonster.create(newMonster);
        return monster;
    }

    async getMonsterById(id) {
        const monster = await this.modelMonster.findByPk(id);
        return monster
    }


    async getMonsterByName (monsterName) {
        const monster =  await this.modelMonster.findOne({where:{monster_name: monsterName}})
                return monster;
        
    
    }

    async updateMonster(id, monsterUpdate) { 
        const [updateData] =await this.modelMonster.update(monsterUpdate, {where:{monster_id:id}});
         if(updateData ===0 || !updateData) {
            throw new Error("No hay cambios en el monstruo");
        }

        return  await this.modelMonster.findByPk(id);
        
    }

    async deleteMonsterById(id) { 
        const monster = await this.modelMonster.findByPk(id);

        if (!monster) { 
            const error = new Error("Monstruo no encontrado");
            error.status = 404;
            throw error;
        }

        return await monster.destroy();
        
        
    }   





}


export default MonsterService;