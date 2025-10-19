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


    async deleteMonsterById(id) { 
        return await this.modelMonster.destroy({where:{monster_id:id}});
    }





}


export default MonsterService;